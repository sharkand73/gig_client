import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

import { dateTimeStringToDate } from '../../helpers/functions';


const GigList = ({filteredGigs}) => {
  
  console.log(filteredGigs.length);
  const gigRows = filteredGigs.map((gig, index) => {
    
    return (
        <Link to={`/gigs/${gig.id}`} key={index} className="tr">            
          <div className="td">{dateTimeStringToDate(gig.startTime)}</div>
          <div className="td">{gig.act.name}</div>
          <div className="td">{gig.venue.name}</div>
          <div className="td">£{gig.booking.fee}</div>
        </Link>
    );
  });

  return (
    <div className="gig-list">
      
      <h1>Engagements</h1> 
      <div className="table">      
        {gigRows}       
      </div>     
    </div>
  )};


export default GigList;
