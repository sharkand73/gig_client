import React from 'react';
import NextGig from './NextGig';
import { dateTimeStringToDate } from '../helpers/functions';

const Home = ({sortedGigs}) => {

  const now = new Date();
  // The array sortedGigs is in reverse chronological order.
  // Use reverse() to put it into chronological order.
  let futureGigs = sortedGigs.reverse().filter((item) => new Date(item.startTime) > now);
  let message;

  if (futureGigs.length)
  {
    message = "Your next engagement is:";
  }
  else
  {
    message = "You have no engagements coming up.";
  }
  

  return (
    <div className="home">
      <h1>{message}</h1> 
      {futureGigs.length ? <NextGig gig={futureGigs[0]} /> : null}
    </div>
  )
}

export default Home;
