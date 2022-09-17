import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import All from '../buttons/All';
import New from '../buttons/New';

const GigsHome = () => {

  return (
    <>
    <nav>
      <Link to = '/gigs' ><All /> </Link>
      <Link to = '/gigs/new' > <New /> </Link>
    </nav> 
    <Outlet />
  </>
    
  )
}

export default GigsHome;
