import React from 'react';
import { useParams } from 'react-router-dom';
import { findById } from '../../helpers/functions';
import { parseVenue } from '../../helpers/formHelper';
import Error from '../Error';
import VenueEdit from './VenueEdit';

const VenueEditHome = ({ reloads, setReloads, venues }) => {
    
    const id  = parseInt(useParams().id);
    const venue = findById(venues, id);
   
    if (!venue){
      return (
        <Error entity = {"venue"} />
      )
    };

    

    return (
        <VenueEdit venue={parseVenue(venue)} reloads={reloads} setReloads={setReloads} />
    )
}

export default VenueEditHome;