import React from 'react';
import { useParams } from 'react-router-dom';
import { findById } from '../../helpers/functions';

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

    return (
      <div className = "table">
        <div className = "tr">
          <div className = "td">Name:</div><div className = "td">{venue.name}</div>
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
        <Back />
      </div>
    );
};

export default Venue;

