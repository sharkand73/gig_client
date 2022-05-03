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
