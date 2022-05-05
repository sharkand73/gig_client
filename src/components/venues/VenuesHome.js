import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const VenuesHome = ({venues}) => {

  return (
    <>
      <nav>
        <Link to = '/venues' >All </Link>
        <Link to = '/venues/new' >Add</Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default VenuesHome;
