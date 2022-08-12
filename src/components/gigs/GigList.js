import React, { useState, useEffect } from 'react';
import { createGigObject, reverseGigObject, isCancelled, getInitialViewState } from '../../helpers/gigHelper';
import GigSubList from './GigSubList';
import { GigViewSettings } from './GigViewSettings';


const GigList = ({gigs, futureGigs}) => {
  
  const [view, setView] = useState(getInitialViewState());
  useEffect(() => {
    console.log(view);
    localStorage.setItem("gigView", JSON.stringify(view))
  }, [view]);

  const nextGig = (futureGigs.length > 0) ? futureGigs.filter(g => !isCancelled(g))[0] : null;

  let filteredGigs;
  filteredGigs = view.showPastGigs ? gigs : futureGigs;
  if (!view.showCancelledGigs){
    filteredGigs = filteredGigs.filter(g => !isCancelled(g));
  }


  const gigObj = createGigObject(filteredGigs);
  if (view.reverseChronology)
  {
  reverseGigObject(gigObj);
  }
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
      <GigViewSettings view={view} setView={setView} />
      <div className="gig-list">
        
        <h1>Engagements</h1> 
        <div className="gig-sublist">      
          {yearRows}       
        </div>     
      </div>
    </div>
  )};


export default GigList;
