import React from 'react';
import { useParams } from 'react-router-dom';
import { findById } from '../../helpers/functions';

import Back from '../buttons/Back';
import Error from '../Error';


const Organisation = ({organisations}) => {

    const id  = parseInt(useParams().id);
    const organisation = findById(organisations, id);
   
    if (!organisation){
      return (
        <Error entity = {"organisation"} />
      )
    };

    return (
      <div className = "table mtop">
        <div className = "tr">
          <div className = "td">Name:</div><div className = "td">{organisation.name}</div>
        </div>
        <div className = "tr">
          <div className = "td">Address Line 1:</div><div className = "td">{organisation.address.addressLine1}</div>
        </div>
        <div className = "tr">
          <div className = "td">Address Line 2:</div><div className = "td">{organisation.address.addressLine2}</div>
        </div>
        <div className = "tr">
          <div className = "td">City:</div><div className = "td">{organisation.address.city}</div>
        </div>
        <div className = "tr">
          <div className = "td">Region:</div><div className = "td">{organisation.address.region}</div>
        </div>
        <div className = "tr">
          <div className = "td">Postcode:</div><div className = "td">{organisation.address.postcode}</div>
        </div>
        <div className = "tr">
          <div className = "td">Country:</div><div className = "td">{organisation.address.country}</div>
        </div>
        <Back />
      </div>
    );
};

export default Organisation;

