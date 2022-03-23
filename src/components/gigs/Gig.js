import React from 'react';
import { useParams } from 'react-router-dom';
import { findById } from '../../helpers/functions';
import GigDetails from './GigDetails';
import Error from '../Error';


const Gig = ({gigs}) => {

      const id  = parseInt(useParams().id);
      const gig = findById(gigs, id);

      if (!gig){
        return (
          <Error entity = {"gig"} />
        )
      };

    return (
      <GigDetails gig = {gig} />
    );
};

export default Gig;

