import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_FLIGHTS } from '../../actions/actionTypes';
import errorImg from '../../assets/error.svg';
import Result from './Result';
import axios from 'axios';

const ResultWrapper = () => {
  const [error, setError] = useState(false);
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
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${fromId}/${toId}/${startDate}/${endDate}`,
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
        .then((res) => {
          dispatch({
            type: FETCH_FLIGHTS,
            data: res.data,
          }),
            setError(false);
        })
        .catch((error) => {
          setError(true);

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
              type: 'out'
            });
          } 
          if (carriers[i].CarrierId === quotes[j].InboundLeg.CarrierIds[0]) {
            parsedCarriers.push({
              id: carriers[i].CarrierId,
              name: carriers[i].Name,
              price: quotes[j].MinPrice,
              type: 'in'
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

      {error ? (
        <div className="card error">
          <img src={errorImg} width="200" height="200" />
          <div>
            An error occurred in your search, please try again or modify the
            data entered
          </div>
        </div>
      ) : (
        <ul>
          {parseData().map((ticket) => (
            <Result
              key={ticket.id}
              from={ticket.type === 'out' ? from : to}
              to={ticket.type === 'out' ? to : from}
              airlineName={ticket.name}
              flightNumber={ticket.id}
              ticketPrice={ticket.price}
              date={ticket.type === 'out' ? startDate : endDate}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultWrapper;
