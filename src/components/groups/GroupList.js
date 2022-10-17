import React from 'react';
import { Link } from 'react-router-dom';
import { dateTimeStringToShortDate } from '../../helpers/functions';
import { sortObjectsChronologically } from '../../helpers/functions';

const GroupList = ({ groups }) => {

  let groupRows = {};
  if (groups){
    let oGroups = sortObjectsChronologically(groups, 'bookingDate', false);
    groupRows = oGroups.map((group, index) => {
    
    return (
        <Link to={group.id.toString()} key={index} className="tr">  
          <div className="td">{dateTimeStringToShortDate(group.bookingDate)}</div>           
          <div className="td">{group.bookingCode}</div>
        </Link>
    );
  })};

  return (
    <>
      <h1>Bookings</h1>
      <div className="item-list">       
        <div className="table">  
          <div className="tr sticky">
            <div className="td">Date</div>  
            <div className="td">Booking Code</div>
          </div>    
          {groupRows}       
        </div>     
      </div>
    </>
  )};


export default GroupList;
