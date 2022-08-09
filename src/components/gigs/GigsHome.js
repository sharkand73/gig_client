import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const GigsHome = () => {

  return (
    <>
    <nav>
      <Link to = '/gigs' >All </Link>
      <Link to = '/gigs/new' > Add</Link>
    </nav> 
    <Outlet />
  </>
    
  )
}

export default GigsHome;
