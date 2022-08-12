import React from 'react';
import { GigSummary } from './GigSummary';
import {Link} from 'react-router-dom';
import { processGigClass } from '../../helpers/gigHelper';

const GigSubList = ({gigs, nextGig, useNextGig}) => {
  
  const gigRows = gigs.map((gig, index) => {
    return (
      <Link to={`/gigs/${gig.id}`} key={index} > 
        <GigSummary gig={gig} gigClass={processGigClass(gig, nextGig, useNextGig)} />
      </Link>
  )});


  return (  
      <div className="gig-list">      
        {gigRows}       
      </div> 
  )
}


export default GigSubList;
