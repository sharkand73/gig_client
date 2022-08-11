import React from 'react';
import {Link} from 'react-router-dom';

import { dateTimeStringToDate } from '../../helpers/functions';
import { isCancelled, processFee, processGigClass } from '../../helpers/gigHelper';
import Cancelled from '../icons/cancelled-stamp.jpg';


const GigSubList = ({gigs, nextGig, useNextGig}) => {
  
  const gigRows = gigs.map((gig, index) => {
    return (
      <Link to={`/gigs/${gig.id}`} key={index} className='tix'> 
        <div className={`${processGigClass(gig, nextGig, useNextGig)}`}>
          <div className="text">   
            <div className="act">{gig.act.name}</div>        
            <div className="date">{dateTimeStringToDate(gig.startTime)}</div>
            <div className="venue">{gig.venue.name}, {gig.venue.address ? gig.venue.address.city : null}</div>
            <div className="money">{processFee(gig.booking.fee + gig.booking.expenses)}</div>
            { isCancelled(gig) ?
            <div className='cancelled'>
              <img src={Cancelled} height={100}/>
            </div> : null }
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
