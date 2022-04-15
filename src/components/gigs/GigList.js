import React from 'react';
import {Link} from 'react-router-dom';

import { dateTimeStringToDate } from '../../helpers/functions';


const GigList = ({filteredGigs}) => {
  
  //console.log(filteredGigs.length);
  const gigRows = filteredGigs.map((gig, index) => {

    const processFee = (fee) => {
      return fee === 0 ? "FREE" : "£"+fee.toFixed(2) ;
    }
    
    return (
        <Link to={`/gigs/${gig.id}`} key={index}> 
        <div className="ticket">
        <div className="text">   
          <div className="act">{gig.act.name}</div>        
          <div className="date">{dateTimeStringToDate(gig.startTime)}</div>
          <div className="venue">{gig.venue.name}</div>
          <div className="money">{processFee(gig.booking.fee)}</div>
        </div>
        </div>
        </Link>
    );
  });

  return (
    <div className="gig-list">
      
      <h1>Engagements</h1> 
      <div className="gig-list">      
        {gigRows}       
      </div>     
    </div>
  )};


export default GigList;
