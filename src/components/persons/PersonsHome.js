import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import All from '../buttons/All';
import New from '../buttons/New';

const PersonsHome = ({persons}) => {

  return (
    <>
      <nav>
        <Link to = '/people' ><All /> </Link>
        <Link to = '/people/new' ><New /></Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default PersonsHome;
