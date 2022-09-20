import React, { useState } from 'react';
import { set } from 'react-hook-form';
import {Link } from 'react-router-dom';
import { getNavItemClass, navItems } from '../helpers/navHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    //const [selectedNavItem, setSelectedNavItem] = useState('home');
    const [showDropdown, setShowDropdown] = useState(false);

    const navMenu = navItems.map((navItem, index) => (
          <Link to={navItem==='home' ? "/" : navItem} className='dropdown-item' key={index}>
            {navItem}
            <hr />
          </Link>
    ));

    return (
      <div className='burger-menu'>
        <button onClick={()=>setShowDropdown(!showDropdown)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav className={showDropdown? 'nav' : 'hide'}>
          {navMenu}
        </nav>
      </div>
    );
};

export default NavBar;

