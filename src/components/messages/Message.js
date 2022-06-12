import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { findById, dateTimeStringToShortDate } from '../../helpers/functions';

import Back from '../buttons/Back';
import Error from '../Error';


const Message = ({messages}) => {

    const id  = parseInt(useParams().id);
    const message = findById(messages, id);
   
    const bookingComponent = () => {
      if (message.bookingGroup){
        return (
          <Link to={`/bookings/${message.bookingGroup.id.toString()}`} >
            {message.bookingGroup.bookingCode}
          </Link>
        )}
        else {
          return (
            <span>None </span>
          )
        }
      }

    if (!message){
      return (
        <Error entity = {"message"} />
      )
    };

    return (
      <div className="message-container">
        <div className="message-date">
          {dateTimeStringToShortDate(message.date)}
        </div>
        <div>
          Booking: {bookingComponent()}
        </div>
          
        <div>
          {message.bookingMethod}
        </div>
        <div>
          {message.body}
        </div>
        <Back />
      </div>
    );
};

export default Message;

