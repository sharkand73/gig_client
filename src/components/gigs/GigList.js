import React, { useState, useEffect } from 'react';
import { sortAsc, sortDesc } from '../../helpers/functions';
import { createGigObject, reverseGigObject, isCancelled, getInitialViewState } from '../../helpers/gigHelper';
import GigSubList from './GigSubList';
import { GigViewSettings } from './GigViewSettings';


const GigList = ({gigs, futureGigs}) => {
  
  const [view, setView] = useState(getInitialViewState());
  useEffect(() => {
    localStorage.setItem("gigView", JSON.stringify(view));
    console.log(view);
  }, [view]);

  const nextGig = (futureGigs.length > 0) ? futureGigs.filter(g => !isCancelled(g))[0] : null;

  let filteredGigs;
  filteredGigs = view.showPastGigs ? gigs : futureGigs;
  if (!view.showCancelledGigs){
    filteredGigs = filteredGigs.filter(g => !isCancelled(g));
  }
  if (view.reverseChronology){
    filteredGigs.reverse();
  }

  const gigObj = createGigObject(filteredGigs);


  let yearRows;
  if (gigObj){
      const yearList = view.reverseChronology ? sortDesc(Object.keys(gigObj)) : sortAsc(Object.keys(gigObj));
      yearRows = yearList.map((year, index) => {
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
        <div className="item-list">      
          {yearRows}       
        </div>     
      </div>
    </div>
  )};


export default GigList;
