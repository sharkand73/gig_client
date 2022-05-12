import React from 'react';
import {Link} from 'react-router-dom';

import { dateTimeStringToDate } from '../../helpers/functions';
import { processFee, processGigClass } from '../../helpers/gigHelper';


const GigSubList = ({gigs, nextGig, useNextGig}) => {
  
  const gigRows = gigs.map((gig, index) => {
    return (
      <Link to={`/gigs/${gig.id}`} key={index}> 
      <div className={processGigClass(gig, nextGig, useNextGig)}>
        <div className="text">   
          <div className="act">{gig.act.name}</div>        
          <div className="date">{dateTimeStringToDate(gig.startTime)}</div>
          <div className="venue">{gig.venue.name}, {gig.venue.address.city}</div>
          <div className="money">{processFee(gig.booking.fee)}</div>
        </div>
        <div className="stub">
          {/* Insert stuff here */}
        </div>
      </div>
      </Link>
  )});


  return (  
      <div className="gig-list">      
        {gigRows}       
      </div> 
  )
}


export default GigSubList;
