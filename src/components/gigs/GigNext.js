import React from 'react';
import GigDetails from './GigDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Asterisk from '../icons/Asterisk';

const GigNext = ({futureGigs, cache}) => {

  const filteredGigs = futureGigs.filter(gig => gig.booking.status !== "CANCELLED");
  const gigsExist = filteredGigs && (filteredGigs.length > 0);

  let message;
  if (gigsExist)
  {
    message = "Next Engagement";
  }
  else
  {
    message = "No engagements coming up";
  }

  let gig = gigsExist ? filteredGigs[0]: null;

  if (!cache) {
    localStorage.setItem("nextGig", JSON.stringify(gig));
  }

  const getMapLink = () => {
    if (!gig){
      return "";
    }
    const baseUrl = 'http://www.google.com/maps/dir/Current+Location/';
    const N = gig.venue.coordinatesN;
    const E = gig.venue.coordinatesE;
    return `${baseUrl}${N},${E}`;
    }

    return (
      <div className="gig">
        <header>
          <div id="gig-msg">
              <h1>{message}</h1>
              {cache ? <Asterisk /> : null} 
          </div>
            <a href={getMapLink()} target='_blank'>
              <FontAwesomeIcon className='play' icon={faPlay} />
            </a>   
        </header>
        <div>
          {gigsExist ? <GigDetails gig={gig} /> : null}
        </div>
      </div>
    );
};

export default GigNext;