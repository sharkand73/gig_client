import React from 'react';
import { Link } from 'react-router-dom';

const VenueList = ({ venues }) => {
  
  let venueRows = {};
  if (venues){
  venueRows = venues.map((venue, index) => {
    
    return (
        <Link to={venue.id.toString()} key={index} className="tr">            
          <div className="td">{venue.name}</div>
        </Link>
    );
  })};

  return (
    <div className="venue-list list">
      
      <h1>Venues</h1> 
      <div className="table">      
        {venueRows}       
      </div>     
    </div>
  )};


export default VenueList;
