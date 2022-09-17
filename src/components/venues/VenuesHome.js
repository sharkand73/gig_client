import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import All from '../buttons/All';
import New from '../buttons/New';

const VenuesHome = ({venues}) => {

  return (
    <>
      <nav>
        <Link to = '/venues' ><All /> </Link>
        <Link to = '/venues/new' ><New /></Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default VenuesHome;
