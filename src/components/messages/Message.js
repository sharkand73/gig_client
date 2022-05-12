import React from 'react';
import { useParams } from 'react-router-dom';
import { findById } from '../../helpers/functions';

import Back from '../buttons/Back';
import Error from '../Error';


const Message = ({messages}) => {

    const id  = parseInt(useParams().id);
    const message = findById(messages, id);
   
    if (!message){
      return (
        <Error entity = {"message"} />
      )
    };

    return (
      <div className = "table">
        <div className = "tr">
          <div className = "td">Name:</div><div className = "td">{message.name}</div>
        </div>
        <div className = "tr">
          <div className = "td">Address Line 1:</div><div className = "td">{message.address.addressLine1}</div>
        </div>
        <div className = "tr">
          <div className = "td">Address Line 2:</div><div className = "td">{message.address.addressLine2}</div>
        </div>
        <div className = "tr">
          <div className = "td">City:</div><div className = "td">{message.address.city}</div>
        </div>
        <div className = "tr">
          <div className = "td">Region:</div><div className = "td">{message.address.region}</div>
        </div>
        <div className = "tr">
          <div className = "td">Postcode:</div><div className = "td">{message.address.postcode}</div>
        </div>
        <div className = "tr">
          <div className = "td">Country:</div><div className = "td">{message.address.country}</div>
        </div>
        <Back />
      </div>
    );
};

export default Message;

