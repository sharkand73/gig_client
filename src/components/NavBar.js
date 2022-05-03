import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { getNavItemClass } from '../helpers/navHelper';

const NavBar = () => {

    const [selectedNavItem, setSelectedNavItem] = useState('home');

    const navItems = ['home', 'gigs', 'bookings', 'acts', 'venues', 'people'];

    const navMenu = navItems.map((navItem, index) => (
      <div key={index}> 
          <Link to={navItem==='home' ? "/" : navItem}>
            <button onClick={()=>setSelectedNavItem(navItem)}
            className = {getNavItemClass(navItem, selectedNavItem)}>
            {navItem}
            </button>
          </Link>
      </div>
    ));

    return (
      <nav className='Nav'>
        {navMenu}
      </nav>
    );
};

export default NavBar;

