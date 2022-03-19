import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import Request from  './helpers/request';

import Loading from './components/Loading';
import NavBar from './components/NavBar';

import Gig from './components/gigs/Gig';
import GigsHome from './components/gigs/GigsHome';
//import NewGig from './components/NewGig';

import PersonsHome from './components/persons/PersonsHome';
import PersonList from './components/persons/PersonList';
import Person from './components/persons/Person';
//import NewAddress from './components/addresses/NewAddress';
//import NewDetails from './components/details/NewDetails';
//import NewPerson from './components/archived/NewPerson';


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
  if (gigs){
    if (gigs.length > 1) {
      sortedGigs = gigs.slice().sort((gig1, gig2) => (new Date(gig2.startTime) - new Date(gig1.startTime)));   
    }
  }

  return (
    <div className="App">
      
        <NavBar />

        <Routes>
          <Route index element={ gigs ? <GigsHome sortedGigs={sortedGigs} /> : <Loading />} />

          <Route path = 'gigs' element={ gigs ? <GigsHome sortedGigs={sortedGigs}  /> : <Loading />} >
            <Route path = ':id' element = { gigs ? <Gig gigs={gigs} setGigs={setGigs}/> : <Loading />} /> 
          </Route> 
      
          <Route path = 'people' element={ persons ? <PersonsHome persons={persons} /> :  <Loading />} >
            <Route index element = { persons ? <PersonList persons={persons} /> :  <Loading />} />
            <Route path = ':id' element={ persons ? <Person persons={persons}  />  : <Loading />} />
          </Route>

          <Route path = 'venues' element={ venues ? <VenuesHome venues={venues} /> :  <Loading />} >
            <Route index element = { venues ? <VenueList venues={venues} /> :  <Loading />} />
            <Route path = ':id' element={ venues ? <Venue venues={venues}  />  : <Loading />} />
          </Route>

        </Routes>
    </div>

  )
}

export default App;
