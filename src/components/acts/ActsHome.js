import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import All from '../buttons/All';
import New from '../buttons/New';

const ActsHome = ({ acts }) => {

// remove { acts }?  

  return (
    <>
      <nav>
        <Link to = '/acts'><All /> </Link>
        <Link to = '/acts/new'><New /></Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default ActsHome;
