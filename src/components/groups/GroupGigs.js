import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { findById } from '../../helpers/functions';
import GigSubList from '../gigs/GigSubList';
import Back from '../buttons/Back';
import Loading from '../Loading';

import Error from '../Error';

const GroupGigs = ({ groups }) => {

  const id  = parseInt(useParams().id);
  const group = findById(groups, id);
   
  if (!group){
    return (
        <Error entity = {"group"} />
    )
  };

  const groupGigs = group.bookings.map((booking) => {
    let gig = booking.gig;
    gig.booking = booking;
    return gig; 
  });
  return (
    <>
      <GigSubList gigs={groupGigs} nextGig={null} useNextGig={false} />
      <Back />
    </>
  )
}
export default GroupGigs;
