import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ActsHome = ({ acts }) => {

// remove { acts }?  

  return (
    <>
      <nav>
        <Link to = '/acts' >All </Link>
        <Link to = '/acts/new' >Add</Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default ActsHome;
