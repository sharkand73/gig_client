import React from 'react';
import { Link } from 'react-router-dom';
import { sortObjectsChronologically, dateTimeStringToShortDate } from '../../helpers/functions';
import { comms } from '../icons/icons';

const MessageList = ({ messages }) => {

  const sortedMessages = sortObjectsChronologically(messages, 'date', false);
  
  let messageRows = {};
  if (messages){
  messageRows = sortedMessages.map((message, index) => {
    
    return (
        <Link to={`/messages/${message.id.toString()}`} key={index} className="message-summary"> 
          <div className="">{comms[message.bookingMethod]}</div>           
          <div className="">{dateTimeStringToShortDate(message.date)}</div>
          <div className="">{message.body.slice(0,70)}...</div>
        </Link>
    );
  })};

  return (
    <div className="message-list list">
      
      <h1>Messages</h1> 
      <div className="">      
        {messageRows}       
      </div>     
    </div>
  )};


export default MessageList;
