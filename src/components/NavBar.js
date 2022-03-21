import React from 'react';
import {Link } from 'react-router-dom';

const NavBar = () => {

    return (
      <nav>
        <Link to="/gigs">Gigs</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/people">People</Link>
        <Link to="/acts">Acts</Link>
        <Link to="/venues">Venues</Link>

      </nav>
    );
};

export default NavBar;

