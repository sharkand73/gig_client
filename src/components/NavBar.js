import React from 'react';
import {Link } from 'react-router-dom';
import { findById, dateTimeStringToDate, dateTimeStringToTime } from '../helpers/functions';


const NavBar = () => {

    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/gigs">Gigs</Link>
        <Link to="/gigs/new">New Gig</Link>
      </div>
    );
};

export default NavBar;

