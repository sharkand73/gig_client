import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MessagesHome = ({messages}) => {

  return (
    <>
      <nav>
        <Link to = '/messages' >All </Link>
        <Link to = '/messages/new' >Add</Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default MessagesHome;
