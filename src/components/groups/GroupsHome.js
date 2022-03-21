import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const GroupsHome = ({ groups }) => {

  return (
    <>
      <nav>
        <Link to = '/groups' >All</Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default GroupsHome;
