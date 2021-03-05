import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_FLIGHTS } from '../../actions/actionTypes';
import Result from './Result';
import axios from 'axios';

const ResultWrapper = () => {
  const data = useSelector((state) => state.flightsReducer);
  const from = useSelector((state) => state.infoReducer.from);
  const fromId = useSelector((state) => state.infoReducer.fromId);
  const to = useSelector((state) => state.infoReducer.to);
  const toId = useSelector((state) => state.infoReducer.toId);
  const startDate = useSelector((state) => state.infoReducer.startDate);
  const endDate = useSelector((state) => state.infoReducer.endDate);
  const dispatch = useDispatch();

  const options = {
    method: 'GET',
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${fromId}/${toId}/${startDate}`,
    params: { inboundpartialdate: endDate },
    headers: {
      'x-rapidapi-key': '08eb576b39mshaa3eb3f0249657ep1b15f7jsn598ba72db2e4',
      'x-rapidapi-host':
        'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    },
  };

  function fetchData() {
    return (dispatch) => {
      axios
        .request(options)
        .then((res) =>
          dispatch({
            type: FETCH_FLIGHTS,
            data: res.data,
          }),
        )
        .then((res) => console.error(res))
        .catch((error) => {
          console.error(error);
        });
    };
  }

  const parseData = () => {
    let carriers = [];
    let quotes = [];
    let parsedCarriers = [];

    if (data?.data?.Carriers?.length) {
      carriers = data.data.Carriers;
      quotes = data.data.Quotes;

      for (let i = 0; i < carriers.length; i++) {
        for (let j = 0; j < quotes.length; j++) {
          if (carriers[i].CarrierId === quotes[j].OutboundLeg.CarrierIds[0]) {
            parsedCarriers.push({
              id: carriers[i].CarrierId,
              name: carriers[i].Name,
              price: quotes[j].MinPrice,
            });
          }
        }
      }
    }

    console.log(parsedCarriers);
    return parsedCarriers;
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Link to="/">
        <div className="navBack"> </div>
      </Link>

      <ul>
        { parseData().map( ticket => 
          <Result
            key ={ ticket.id }
            from ={ from }
            to = { to }
            airlineName = { ticket.name }
            flightNumber = { ticket.id }
            ticketPrice = { ticket.price }    
            date = { startDate }
          />)
        }
      </ul>
    </div>
  );
};

export default ResultWrapper;
