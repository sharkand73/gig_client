import './App.css';
import MainContainer from './MainContainer';
import React, {useState, useEffect} from 'react';
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

  const request = new Request();

  const requestGigs = () => {
    request.get('/gigs')
  .then(data => setGigs(data));
  }

  const requestBookings = () => {
    request.get('/bookings')
  .then(data => setBookings(data));
  }

  const requestGroups = () => {
    request.get('/groups')
  .then(data => setGroups(data));
  }

  const requestActs = () => {
    request.get('/acts')
  .then(data => setActs(data));
  }

  const requestVenues = () => {
    request.get('/venues')
  .then(data => setVenues(data));
  }

  const requestPersons = () => {
    request.get('/persons')
  .then(data => setPersons(data));
  }

  const requestDetails = () => {
    request.get('/details')
  .then(data => setDetails(data));
  }

  const requestAddresses = () => {
    request.get('/addresses')
  .then(data => setAddresses(data));
  } 

  const requestOrganisations = () => {
    request.get('/organisations')
  .then(data => setOrganisations(data));
  }

  const requestMessages = () => {
    request.get('/messages')
  .then(data => setMessages(data));
  }

  const requestInstruments = () => {
    request.get('/instruments')
  .then(data => setInstruments(data));
  }

  const requestSkills = () => {
    request.get('/skills')
  .then(data => setSkills(data));
  }

  const requestStyles = () => {
    request.get('/styles')
  .then(data => setStyles(data)); 
  }

useEffect(()=>{requestGigs()}, [gigs]);
useEffect(()=>{requestBookings()}, [bookings]);
useEffect(()=>{requestGroups()}, [groups]);
useEffect(()=>{requestActs()}, [acts]);
useEffect(()=>{requestVenues()}, [venues]);
useEffect(()=>{requestPersons()}, [persons]);
useEffect(()=>{requestDetails()}, [details]);
useEffect(()=>{requestAddresses()}, [addresses]);
useEffect(()=>{requestOrganisations()}, [organisations]);
useEffect(()=>{requestMessages()}, [messages]);
useEffect(()=>{requestInstruments()}, [instruments]);
useEffect(()=>{requestSkills()}, [skills]);
useEffect(()=>{requestStyles()}, [styles]);


  let sortedGigs = gigs;
  let futureGigs;
  if (gigs){
    if (gigs.length > 1) {
      sortedGigs = gigs.slice().sort((gig1, gig2) => (new Date(gig2.startTime) - new Date(gig1.startTime)));
      const now = new Date();
      // The array sortedGigs is in reverse chronological order.
      // Use reverse() to put it into chronological order.
      const tempGigs = sortedGigs;
      futureGigs = tempGigs.reverse().filter((item) => new Date(item.startTime) >= now);
    }
  }

  

  return (
      <MainContainer addresses={addresses}
                    setAddresses={setAddresses}
                    details={details}
                    setDetails={setDetails}
                    organisations={organisations}
                    setOrganisations={setOrganisations}
                    persons={persons}
                    setPersons={setPersons}
                    venues={venues}
                    setVenues={setVenues}
                    acts={acts}
                    setActs={setActs}
                    groups={groups}
                    setGroups={setGroups}
                    bookings={bookings}
                    setBookings={setBookings}
                    gigs={gigs}
                    setGigs={setGigs}
                    messages={messages}
                    setMessages={setMessages} />
  )
}

export default App;
