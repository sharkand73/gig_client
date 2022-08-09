import React, { useState } from 'react';
import { createGigObject, reverseGigObject, isCancelled } from '../../helpers/gigHelper';
import GigSubList from './GigSubList';


const GigList = ({gigs, futureGigs}) => {
  
  const [view, setView] = useState({reverseChronology: false,
                                    showPastGigs: false,
                                    showCancelledGigs: false});

  const nextGig = (futureGigs.length > 0) ? futureGigs.filter(g => !isCancelled(g))[0] : null;

  let filteredGigs;
  filteredGigs = view.showPastGigs ? gigs : futureGigs;
  if (!view.showCancelledGigs){
    filteredGigs = filteredGigs.filter(g => !isCancelled(g));
  }


  const gigObj = createGigObject(filteredGigs);
  //reverseGigObject(gigObj);
  let yearRows;
  if (gigObj){
      yearRows = Object.keys(gigObj).reverse().map((year, index) => {
      return (
        <div className = 'year-group' key={index}>
          <h2>{year}</h2>
          <GigSubList gigs={gigObj[year]} nextGig={nextGig} useNextGig={true}/>
        </div>
    )});
  }

  return (
    <div className = "all-gigs">
    <div className="gig-list">
      
      <h1>Engagements</h1> 
      <div className="gig-sublist">      
        {yearRows}       
      </div>     
    </div>
    </div>
  )};


export default GigList;
