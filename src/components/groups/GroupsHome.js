import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import All from '../buttons/All';
import New from '../buttons/New';

const GroupsHome = ({ groups }) => {

  return (
    <>
      <nav>
        <Link to = '/bookings' ><All /> </Link>
        <Link to = '/bookings/new' ><New /></Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default GroupsHome;
