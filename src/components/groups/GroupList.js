import React from 'react';
import { Link } from 'react-router-dom';
import { dateTimeStringToShortDate } from '../../helpers/functions';

const GroupList = ({ groups }) => {

  let groupRows = {};
  if (groups){
  groupRows = groups.map((group, index) => {
    
    return (
        <Link to={group.id.toString()} key={index} className="tr">  
          <div className="td">{dateTimeStringToShortDate(group.bookingDate)}</div>           
          <div className="td">{group.bookingCode}</div>
        </Link>
    );
  })};

  return (
    <div className="group-list list">
      
      <h1>Bookings</h1> 
      <div className="table">  
        <div className="tr">
          <div className="td">Date</div>  
          <div className="td">Booking Code</div>
        </div>    
        {groupRows}       
      </div>     
    </div>
  )};


export default GroupList;
