import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import All from '../buttons/All';
import New from '../buttons/New';

const MessagesHome = ({messages}) => {

  return (
    <>
      <nav>
        <Link to = '/messages' ><All /> </Link>
        <Link to = '/messages/new' ><New /></Link>
      </nav> 
      <Outlet />
    </>
  )
}

export default MessagesHome;
