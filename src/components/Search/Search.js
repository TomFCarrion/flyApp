import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

import {
  SET_FROM,
  SET_TO,
  SET_START_DATE,
  SET_END_DATE,
} from '../../actions/actionTypes';
import { formatDate, parseDate } from 'react-day-picker/moment';

import 'react-day-picker/lib/style.css';
require('./styles/search.scss');

const Search = () => {
  const from = useSelector((state) => state.infoReducer.from);
  const to = useSelector((state) => state.infoReducer.to);
  const startDate = useSelector((state) => state.infoReducer.startDate);
  const endDate = useSelector((state) => state.infoReducer.endDate);

  const dispatch = useDispatch();

  const handleInputChange = (value, action) => {
    dispatch({ type: action, data: value }), [dispatch];
  };

  const handleInputChange = (value, action) => {
    dispatch({ type: action, data: value }), [dispatch];
  };
  const handleCalendarChange = (value, action) => {
    dispatch({ type: action, data: moment(value).format('YYYY-MM-DD') }),
      [dispatch];
  };

  const modifiers = { start: from, end: to };

  return (
    <div className="wrapper">
      <input
        type="text"
        value={from}
        onChange={(e) => handleInputChange(e.target.value, SET_FROM)}
        name="from"
      />
      <input
        type="text"
        value={to}
        onChange={(e) => handleInputChange(e.target.value, SET_TO)}
        name="to"
      />
      <DayPickerInput
        value={startDate}
        placeholder="From"
        formatDate={formatDate}
        parseDate={parseDate}
        dayPickerProps={{
          modifiers,
          numberOfMonths: 2,
        }}
        onDayChange={(e) => handleCalendarChange(e, SET_START_DATE)}
      />{' '}
      —{' '}
      <span className="InputFromTo-to">
        <DayPickerInput
          value={endDate}
          placeholder="To"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            modifiers,
            numberOfMonths: 2,
          }}
          onDayChange={(e) => handleCalendarChange(e, SET_END_DATE)}
        />
      </span>
      <Link to="/result">
        <button type="button">Click Me!</button>
      </Link>
    </div>
  );
};

export default Search;
