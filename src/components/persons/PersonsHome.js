import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const PersonsHome = ({persons}) => {

  return (
    <>
      <nav>
        <Link to = '/people' >All </Link>
        <Link to = '/people/new' >Add</Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default PersonsHome;
