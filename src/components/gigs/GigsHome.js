import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const GigsHome = ({sortedGigs}) => {

  return (
    <>
    <nav>
      <Link to = '/gigs' >All</Link>
    </nav> 
    <Outlet />
  </>
    
  )
}

export default GigsHome;
