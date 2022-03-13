import React from 'react';
import {Link } from 'react-router-dom';
import { findById, dateTimeStringToDate, dateTimeStringToTime } from '../helpers/functions';


const NavBar = () => {

    return (
      <div>
        <Link to="/gigs">Gigs</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/other">other</Link>
      </div>
    );
};

export default NavBar;

