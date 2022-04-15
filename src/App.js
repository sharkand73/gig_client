import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import Request from  './helpers/request';

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
//import NewAddress from './components/addresses/NewAddress';
//import NewDetails from './components/details/NewDetails';
//import NewPerson from './components/archived/NewPerson';

import ActsHome from './components/acts/ActsHome';
import ActList from './components/acts/ActList';
import Act from './components/acts/Act';

import VenuesHome from './components/venues/VenuesHome';
import VenueList from './components/venues/VenueList';
import Venue from './components/venues/Venue';

function App() {

  //const baseUrl = 'http://localhost:8080/api';

  const [gigs, setGigs] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [groups, setGroups] = useState(null);
  const [acts, setActs] = useState(null);
  const [venues, setVenues] = useState(null);
  const [persons, setPersons] = useState(null);
  const [details, setDetails] = useState(null);
  const [addresses, setAddresses] = useState(null);
  const [organisations, setOrganisations] = useState(null);
  const [messages, setMessages] = useState(null);
  const [instruments, setInstruments] = useState(null);
  const [skills, setSkills] = useState(null);
  const [styles, setStyles] = useState(null);



  const requestAll = function(){
    const request = new Request();
    const gigPromise = request.get('/gigs');
    const bookingPromise = request.get('/bookings');
    const groupPromise = request.get('/groups');
    const actPromise = request.get('/acts');
    const venuePromise = request.get('/venues');
    const personPromise = request.get('/persons');
    const detailsPromise = request.get('/details');
    const addressPromise = request.get('/addresses');
    const organisationPromise = request.get('/organisations');
    const messagePromise = request.get('/messages');
    const instrumentPromise = request.get('/instruments');
    const skillPromise = request.get('/skills');
    const stylePromise = request.get('/styles');
    

    Promise.all([gigPromise, bookingPromise, groupPromise, actPromise, venuePromise, personPromise, detailsPromise, addressPromise, organisationPromise, messagePromise, instrumentPromise, skillPromise, stylePromise])
        .then((data) => {
            setGigs(data[0]);
            setBookings(data[1]);
            setGroups(data[2]);
            setActs(data[3]);
            setVenues(data[4]);
            setPersons(data[5]);
            setDetails(data[6]);
            setAddresses(data[7]);
            setOrganisations(data[8]);
            setMessages(data[9]);
            setInstruments(data[10]);
            setSkills(data[11]);
            setStyles(data[12]);
        })}

useEffect(()=>{requestAll()}, [])

  let sortedGigs = gigs;
  let futureGigs;
  if (gigs){
    if (gigs.length > 1) {
      sortedGigs = gigs.slice().sort((gig1, gig2) => (new Date(gig1.startTime) - new Date(gig2.startTime)));
      const now = new Date();
      // The array sortedGigs is in reverse chronological order.
      // Use reverse() to put it into chronological order.
      const tempGigs = sortedGigs;
      futureGigs = tempGigs.reverse().filter((item) => new Date(item.startTime) >= now);
    }
  }

  

  return (
    <div className="App">
      
        <NavBar />

        <Routes>
          <Route index element={ gigs ? <GigNext filteredGigs={futureGigs} /> : <Loading />} />

          <Route path = 'gigs' element={ gigs ? <GigsHome filteredGigs={sortedGigs} /> : <Loading />} >
            <Route index element = { gigs? <GigList filteredGigs = {sortedGigs} /> : <Loading />} />
            <Route path = ':id' element = { gigs ? <Gig gigs={gigs} /> : <Loading />} /> 
          </Route> 
      
          <Route path = 'people' element={ persons ? <PersonsHome persons={persons} /> :  <Loading />} >
            <Route index element = { persons ? <PersonList persons={persons} /> :  <Loading />} />
            <Route path = ':id' element={ persons ? <Person persons={persons}  />  : <Loading />} />
          </Route>

          <Route path = 'venues' element={ venues ? <VenuesHome venues={venues} /> :  <Loading />} >
            <Route index element = { venues ? <VenueList venues={venues} /> :  <Loading />} />
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

export default App;
