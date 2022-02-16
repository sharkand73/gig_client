import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GigList from './components/GigList';
import Gig from './components/Gig';
import NewGig from './components/NewGig';
import Loading from './components/Loading';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NewAddress from './components/address/NewAddress';
import NewDetails from './components/details/NewDetails';
import NewPerson from './components/person/NewPerson';

import Request from  './helpers/request';


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
      <Router>
        <NavBar />
        <Routes>
          <Route path = '/' element={gigs ? <Home sortedGigs={sortedGigs} setGigs={setGigs}/> : <Loading />} />
          <Route path = '/gigs' element={gigs ? <GigList sortedGigs={sortedGigs} setGigs={setGigs} /> : <Loading />} />
          <Route path = '/gigs/new' element = {gigs ? <NewGig gigs={gigs} setGigs={setGigs} acts={acts} venues={venues} bookings={bookings} groups={groups} /> : <Loading />} />
          <Route path = '/gigs/:id' element = {gigs ? <Gig gigs={gigs} setGigs={setGigs}/> : <Loading />} />
          <Route path = '/people/new' element = {organisations? <NewPerson organisations={organisations} /> : <Loading />} />
          {/* <Route path = '/addresses/new' element = {<NewAddress postAddress={postAddress}/>} />
          <Route path = '/details/new' element = {addresses ? <NewDetails addresses = {addresses} postDetails={postDetails} /> : <Loading />} /> */}

        </Routes>
      </Router>
    </div>

  )
}

export default App;
