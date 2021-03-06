import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const GroupsHome = ({ groups }) => {

  return (
    <>
      <nav>
        <Link to = '/bookings' >All </Link>
        <Link to = '/bookings/new' >Add</Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default GroupsHome;
