import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import{ FETCH_FLIGHTS } from '../actions/actionTypes'
import axios from 'axios';

export const Flights =  () => {

    const data = useSelector(state => state.flightsReducer);    
    const dispatch = useDispatch();

    const options = {
        method: 'GET',
        url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/2021-03-20',
        params: {inboundpartialdate: ''},
        headers: {
          'x-rapidapi-key': '08eb576b39mshaa3eb3f0249657ep1b15f7jsn598ba72db2e4',
          'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
        }
      };

      function fetchData() {
        return  dispatch => { axios.request(options).then(res =>
            dispatch({
              type: FETCH_FLIGHTS,
              data: res
            }))
            .then(res=> console.error(res)).catch(error => {
            console.error(error);
        });}
    }

      
        useEffect(() => {
            dispatch(fetchData());
        }, [])


        return (
            <h1>test</h1>
             
    )
            
}