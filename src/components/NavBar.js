import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { navItems } from '../helpers/navHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useOutsideClick } from '../helpers/functions';

const NavBar = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setShowDropdown(true);
    const handleClickOutside = () => setShowDropdown(false);

    const ref = useOutsideClick(handleClickOutside);
    const handleDivClick = (event) => {
      event.stopPropagation();
    };

    const navMenu = navItems.map((navItem, index) => (
          <Link to={navItem==='home' ? "/" : navItem} className='dropdown-item' onClick={()=>setShowDropdown(false)} key={index}>
            {navItem}
            <hr />
          </Link>
    ));

    return (
      <div className='burger-menu' onClick={handleDivClick}>
        <button className="crud" ref={ref} onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} size="2x"/>
        </button>
        <nav id="nav" className={showDropdown? 'show' : 'hide'}>
          {navMenu}
        </nav>
      </div>
    );
};

export default NavBar;

