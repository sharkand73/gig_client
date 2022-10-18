import React from 'react';
import { Link } from 'react-router-dom';
import { sortObjectsAlphabetically } from '../../helpers/functions';

const VenueList = ({ venues }) => {

  const sortedVenues = sortObjectsAlphabetically(venues, 'name');
  
  let venueRows = {};
  if (venues){
  venueRows = sortedVenues.map((venue, index) => {
    
    return (
        <Link to={venue.id.toString()} key={index} className="tr">            
          <div className="td">{venue.name}</div>
        </Link>
    );
  })};

  return (
    <>
      <h1>Venues</h1> 
      <div className="item-list">
        <div className="table">      
          {venueRows}       
        </div>     
      </div>
    </>
  )};

export default VenueList;
