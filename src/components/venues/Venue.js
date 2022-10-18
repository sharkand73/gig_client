import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { findById, sortObjectsChronologically, dateTimeStringToShortDate } from '../../helpers/functions';
import { convertEnumToString } from '../../helpers/enumHelper';
import Edit from '../buttons/Edit';
import Back from '../buttons/Back';
import Error from '../Error';


const Venue = ({venues}) => {

    const id  = parseInt(useParams().id);
    const venue = findById(venues, id);
   
    if (!venue){
      return (
        <Error entity = {"venue"} />
      )
    };

    const getCoordinates = () => {
      let coordsN = `${venue.coordinatesN}°N, `;
      let coordsE = `${venue.coordinatesE}°E`;
      return coordsN + coordsE;
    }

    const getLastPlayed = () => {
      let gigs = venue.gigs;
      if (!gigs || !gigs.length){
        return;
      }
      let orderedGigs = sortObjectsChronologically(gigs, 'startTime', false);
      const now = new Date();
      let filteredGigs = orderedGigs.filter((g) => new Date(g.startTime) <= now);
      if (!filteredGigs.length){
        return;
      }
      return dateTimeStringToShortDate(filteredGigs[0].startTime);
    }

    return (
      <div className = "table mtop">
        <Link to={`/venues/edit/${venue.id}`}>       
          <Edit />
        </Link>
        <div className = "tr">
          <div className = "td">Name:</div><div className = "td">{venue.name}</div>
        </div>
        <div className = "tr">
          <div className = "td">Type:</div><div className = "td">{convertEnumToString(venue.venueType)}</div>
        </div>
        <div className = "tr">
          <div className = "td">Address Line 1:</div><div className = "td">{venue.address.addressLine1}</div>
        </div>
        <div className = "tr">
          <div className = "td">Address Line 2:</div><div className = "td">{venue.address.addressLine2}</div>
        </div>
        <div className = "tr">
          <div className = "td">City:</div><div className = "td">{venue.address.city}</div>
        </div>
        <div className = "tr">
          <div className = "td">Region:</div><div className = "td">{venue.address.region}</div>
        </div>
        <div className = "tr">
          <div className = "td">Postcode:</div><div className = "td">{venue.address.postcode}</div>
        </div>
        <div className = "tr">
          <div className = "td">Country:</div><div className = "td">{venue.address.country}</div>
        </div>
        <div className = "tr">
          <div className = "td">Coordinates:</div><div className = "td">{getCoordinates()}</div>
        </div>
        <div className = "tr">
          <div className = "td">Last Played:</div><div className = "td">{getLastPlayed()}</div>
        </div>
        <Back />
      </div>
    );
};

export default Venue;

