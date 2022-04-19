import React from 'react';
import {Link} from 'react-router-dom';

import { dateTimeStringToDate } from '../../helpers/functions';


const GigList = ({filteredGigs, futureGigs}) => {
  
  const processFee = (fee) => {
    return fee === 0 ? "FREE" : "£"+fee.toFixed(2) ;
  }

  const processGigClass = (i) => {
    if (futureGigs.length > 0 &&  filteredGigs[i].id == futureGigs[0].id){
      return 'ticket next-gig';
    }
    return 'ticket normal-gig';
  }

  const gigRows = filteredGigs.map((gig, index) => {  
    
    return (
        <Link to={`/gigs/${gig.id}`} key={index}> 
        <div className={processGigClass(index)}>
          <div className="text">   
            <div className="act">{gig.act.name}</div>        
            <div className="date">{dateTimeStringToDate(gig.startTime)}</div>
            <div className="venue">{gig.venue.name}, {gig.venue.address.city}</div>
            <div className="money">{processFee(gig.booking.fee)}</div>
          </div>
          <div className="stub">

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
