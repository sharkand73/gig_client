import React from 'react';
import GigDetails from './GigDetails';

const GigNext = ({futureGigs}) => {

  const filteredGigs = futureGigs.filter(gig => gig.booking.status != "CANCELLED");

  let message;
  if (filteredGigs.length)
  {
    message = "Your next engagement is:";
  }
  else
  {
    message = "You have no engagements coming up.";
  }

    return (
      <div className="gig">
      <h1>{message}</h1> 
      {filteredGigs.length ? <GigDetails gig={filteredGigs[0]} /> : null}      
      </div>
    );
};

export default GigNext;