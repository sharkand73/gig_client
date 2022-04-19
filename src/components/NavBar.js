import React, { useState } from 'react';
import {Link } from 'react-router-dom';

const NavBar = () => {

    const [selectedNavItem, setSelectedNavItem] = useState('home');

    return (
      <nav className='Nav'>
        <div> 
          <Link to="/">
            <button onClick={()=>setSelectedNavItem('home')}
            className = {selectedNavItem=='home' ? 'selected-nav' : 'unselected-nav'}>
            Home
            </button>
          </Link>
        </div>
        <div>
          <Link to="/gigs">
            <button onClick={()=>setSelectedNavItem('gigs')}
            className = {selectedNavItem=='gigs' ? 'selected-nav' : 'unselected-nav'}>
            Gigs
            </button>
          </Link>
        </div>
        <div>
          <Link to="/bookings">
            <button onClick={()=>setSelectedNavItem('bookings')}
            className = {selectedNavItem=='bookings' ? 'selected-nav' : 'unselected-nav'}>
            Bookings
            </button>
          </Link>
        </div>
        <div>
          <Link to="/people">
            <button onClick={()=>setSelectedNavItem('people')}
            className = {selectedNavItem=='people' ? 'selected-nav' : 'unselected-nav'}>
            People
            </button>
          </Link>
        </div>
        <div>
          <Link to="/acts">
            <button onClick={()=>setSelectedNavItem('acts')}
            className = {selectedNavItem=='acts' ? 'selected-nav' : 'unselected-nav'}>
            Acts
            </button>
          </Link>
        </div>
        <div>
          <Link to="/venues">
            <button onClick={()=>setSelectedNavItem('venues')}
            className = {selectedNavItem=='venues' ? 'selected-nav' : 'unselected-nav'}>
            Venues
            </button>
          </Link>
        </div>

      </nav>
    );
};

export default NavBar;

