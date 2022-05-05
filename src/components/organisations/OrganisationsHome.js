import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const OrganisationsHome = ({organisations}) => {

  return (
    <>
      <nav>
        <Link to = '/organisations' >All </Link>
        <Link to = '/organisations/new' >Add</Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default OrganisationsHome;
