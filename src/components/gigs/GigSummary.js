import React from 'react';

import { dateTimeStringToDate } from '../../helpers/functions';
import { isCancelled, processFee } from '../../helpers/gigHelper';
import Cancelled from '../icons/cancelled-stamp.jpg';


export const GigSummary = ({ gig, gigClass }) => {
  return (
    <div className={`${gigClass}`}>
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
  )
}
