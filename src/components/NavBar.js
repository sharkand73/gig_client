import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { getNavItemClass, navItems } from '../helpers/navHelper';

const NavBar = () => {

    const [selectedNavItem, setSelectedNavItem] = useState('home');

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

