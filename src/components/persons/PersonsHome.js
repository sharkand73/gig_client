import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';

const PersonsHome = ({persons}) => {

  return (
    <>
      <nav>
        <Link to = '/people' >All</Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default PersonsHome;
