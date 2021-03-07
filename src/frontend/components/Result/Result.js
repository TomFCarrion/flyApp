import React from 'react';
import './result.scss';
import moment from 'moment';

const Result = ({
  from = '',
  to = '',
  airlineName = '-',
  flightNumber = '0000',
  ticketPrice = '-',
  date = '-',
}) => {
  const momentDate = moment(date).format('MMM-DD');
  return (
    <div className='Card'>
      <div className='upper'>
        <span className='upper-item'>{from}</span>
        <span className='upper-item airline'>{airlineName}</span>
        <span className='upper-item'>{to}</span>
      </div>
      <div className='middle'>
        <div>
          <div>Depart:</div>
          <span />
          <div>{momentDate}</div>
        </div>
        <div>
          <div>Flight number:</div>
          <div>{flightNumber}</div>
        </div>

      </div>
      <div className='dot' />
      <div className='dot right' />
      <div className='bottom'>
        <span className='price-text'> Ticket Price</span>
        <span />
        <span className='price'>
          {' '}
          {`$ ${ticketPrice}`}
        </span>
      </div>
    </div>
  );
};
export default Result;
