import React from 'react';
import { useParams } from 'react-router-dom';
import { findById } from '../../helpers/functions';
import Back from '../buttons/Back';

import Error from '../Error';


const Group = ({ groups }) => {

    const id  = parseInt(useParams().id);
    const group = findById(groups, id);
   
    if (!group){
      return (
        <Error entity = {"group"} />
      )
    };

    return (
      <div className = "table">
        <div className = "tr">
          <div className = "td">Booking Code:</div><div className = "td">{group.bookingCode}</div>
        </div>
        <div className = "tr">
          <div className = "td">Booker:</div><div className = "td">{group.booker.firstName} {group.booker.lastName}</div>
        </div>
        <div className = "tr">
          <div className = "td">Booking Date:</div><div className = "td">{group.bookingDate}</div>
        </div>
        <div className = "tr">
          <div className = "td">Fee Payment:</div><div className = "td">{group.feePaymentMethod}</div>
        </div>
        { group.expensesPaymentMethod ?
        <div className = "tr">
          <div className = "td">Expenses Payment:</div><div className = "td">{group.expensesPaymentMethod}</div>
        </div> : null }
        <div className = "tr">
          <div className = "td">Archived:</div><div className = "td">{group.archived.toString()}</div>
        </div>
        <div className = "tr">
          <div className = "td">Gigs:</div><div className = "td">{group.bookings.length}</div>
        </div>
        <div className = "tr">
          <div className = "td">Messages:</div><div className = "td">{group.messages.length}</div>
        </div>
        <Back />
      </div>
    );
};

export default Group;

