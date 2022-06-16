import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { findById } from '../../helpers/functions';
import MessageList from '../messages/MessageList';
import Back from '../buttons/Back';

import Error from '../Error';

const GroupMessages = ({ groups }) => {

  const id  = parseInt(useParams().id);
  const group = findById(groups, id);
   
  if (!group){
    return (
        <Error entity = {"group"} />
    )
  };

  const groupMessages = group.messages;
  // .map((booking) => {
  //   let message = booking.message;
  //   message.booking = booking;
  //   return message; 
  // });
  return (
    <>
      <MessageList messages={groupMessages} />
      <Back />
    </>
  )
}
export default GroupMessages;
