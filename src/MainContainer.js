import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import Loading from './components/Loading';
import NavBar from './components/NavBar';

import GigsHome from './components/gigs/GigsHome';
import GigList from './components/gigs/GigList';
import Gig from './components/gigs/Gig';
import GigNext from './components/gigs/GigNext';
//import NewGig from './components/NewGig';

import GroupsHome from './components/groups/GroupsHome';
import GroupList from './components/groups/GroupList';
import Group from './components/groups/Group';

import PersonsHome from './components/persons/PersonsHome';
import PersonList from './components/persons/PersonList';
import Person from './components/persons/Person';
import PersonNew from './components/persons/PersonNew'; 

import ActsHome from './components/acts/ActsHome';
import ActList from './components/acts/ActList';
import Act from './components/acts/Act';

import VenuesHome from './components/venues/VenuesHome';
import VenueList from './components/venues/VenueList';
import Venue from './components/venues/Venue';
import VenueNew from './components/venues/VenueNew';

const MainContainer = ({ addresses, details, organisations, persons, venues, acts, groups, bookings, gigs, 
                        setAddresses, setDetails, setOrganisations, setPersons, setVenues, setGroups, setBooking, setGigs}) => {

  let sortedGigs = gigs;
  let futureGigs;
  if (gigs){
    if (gigs.length > 1) {
      sortedGigs = gigs.slice().sort((gig1, gig2) => (new Date(gig2.startTime) - new Date(gig1.startTime)));
      const now = new Date();
      // The array sortedGigs is in reverse chronological order.
      // Use reverse() to put it into chronological order.
      futureGigs = [...sortedGigs].filter((item) => new Date(item.startTime) >= now);
    }
  }


  return (
    <div className="App">
      
        <NavBar />

        <Routes>
          <Route index element={ gigs ? <GigNext filteredGigs={futureGigs} /> : <Loading />} />

          <Route path = 'gigs' element={ gigs ? <GigsHome filteredGigs={sortedGigs} /> : <Loading />} >
            <Route index element = { gigs? <GigList filteredGigs = {sortedGigs} futureGigs = {futureGigs}/> : <Loading />} />
            <Route path = ':id' element = { gigs ? <Gig gigs={gigs} /> : <Loading />} /> 
          </Route> 
      
          <Route path = 'people' element={ persons ? <PersonsHome persons={persons} /> :  <Loading />} >
            <Route index element = { persons ? <PersonList persons={persons} /> :  <Loading />} />
            <Route path = 'new' element={ organisations && persons ? <PersonNew organisations={organisations} setAddresses={setAddresses} setDetails={setDetails} setPersons={setPersons}  />  : <Loading />} />
            <Route path = ':id' element={ persons ? <Person persons={persons}  />  : <Loading />} />         
          </Route>

          <Route path = 'venues' element={ venues ? <VenuesHome venues={venues} /> :  <Loading />} >
            <Route index element = { venues ? <VenueList venues={venues} /> :  <Loading />} />
            <Route path = 'new' element={ venues ? <VenueNew  setAddresses={setAddresses} venues={venues} setVenues={setVenues} />  : <Loading />} />
            <Route path = ':id' element={ venues ? <Venue venues={venues}  />  : <Loading />} />
          </Route>

          <Route path = 'bookings' element={ groups ? <GroupsHome groups={groups} /> :  <Loading />} >
            <Route index element = { groups ? <GroupList groups={groups} /> :  <Loading />} />
            <Route path = ':id' element={ groups ? <Group groups={groups}  />  : <Loading />} />
          </Route>

          <Route path = 'acts' element={ acts ? <ActsHome acts={acts} /> :  <Loading />} >
            <Route index element = { acts ? <ActList acts={acts} /> :  <Loading />} />
            <Route path = ':id' element={ acts ? <Act acts={acts}  />  : <Loading />} />
          </Route>
        </Routes>
    </div>

  )
}

export default MainContainer;
