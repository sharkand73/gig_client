import React from 'react';
import { Link } from 'react-router-dom';
import { sortObjectsAlphabetically } from '../../helpers/functions';

const MessageList = ({ messages }) => {

  const sortedMessages = sortObjectsAlphabetically(messages, 'name');
  
  let messageRows = {};
  if (messages){
  messageRows = sortedMessages.map((message, index) => {
    
    return (
        <Link to={message.id.toString()} key={index} className="tr">            
          <div className="td">{message.name}</div>
        </Link>
    );
  })};

  return (
    <div className="message-list list">
      
      <h1>Messages</h1> 
      <div className="table">      
        {messageRows}       
      </div>     
    </div>
  )};


export default MessageList;
