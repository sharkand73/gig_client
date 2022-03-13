import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GigNav from './GigNav';
import GigNext from './GigNext';
import GigList from './GigList';

const GigsHome = ({sortedGigs}) => {

  const [gigsPage, setGigsPage] = useState('next');
  const now = new Date();
  // The array sortedGigs is in reverse chronological order.
  // Use reverse() to put it into chronological order.
  const futureGigs = sortedGigs.reverse().filter((item) => new Date(item.startTime) >= now);
  const pastGigs = sortedGigs.reverse().filter((item) => new Date(item.startTime) < now);
  const openGigs = pastGigs.filter((item) => item.booking.status == "OPEN");
  const closedGigs = pastGigs.filter((item) => item.booking.status == "CLOSED");

  const gigPages = {
    'next': <GigNext filteredGigs = {futureGigs} />,
    'future': <GigList filteredGigs = {futureGigs} />,
    'past': <GigList filteredGigs = {pastGigs} />,
    'open': <GigList filteredGigs = {openGigs} />,
    'closed': <GigList filteredGigs = {closedGigs} />,
  }

  return (
    
      <>
        <GigNav setGigsPage = {setGigsPage} />
        {gigPages[gigsPage]}
      </>
    
  )
}

export default GigsHome;
