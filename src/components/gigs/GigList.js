import React from 'react';
import { createGigObject, reverseGigObject } from '../../helpers/gigHelper';
import GigSubList from './GigSubList';


const GigList = ({filteredGigs, futureGigs}) => {
  
  const nextGig = (futureGigs.length > 0) ? futureGigs[0] : null;
  const gigObj = createGigObject(filteredGigs);
  reverseGigObject(gigObj);
  let yearRows;
  if (gigObj){
      yearRows = Object.keys(gigObj).reverse().map((year, index) => {
      return (
        <div className = 'year-group' key={index}>
          <h2>{year}</h2>
          <GigSubList gigs={gigObj[year]} nextGig={nextGig} />
        </div>
    )});
  }

  return (
    <div className="gig-list">
      
      <h1>Engagements</h1> 
      <div className="gig-list">      
        {yearRows}       
      </div>     
    </div>
  )};


export default GigList;
