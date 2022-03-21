import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ActsHome = ({ acts }) => {

  return (
    <>
      <nav>
        <Link to = '/acts' >All</Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default ActsHome;
