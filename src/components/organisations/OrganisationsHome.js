import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import All from '../buttons/All';
import New from '../buttons/New';

const OrganisationsHome = ({organisations}) => {

  return (
    <>
      <nav>
        <Link to = '/organisations' ><All /></Link>
        <Link to = '/organisations/new' ><New /></Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default OrganisationsHome;
