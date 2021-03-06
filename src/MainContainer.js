import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { sortObjectsChronologically } from './helpers/functions';

import Loading from './components/Loading';
import NavBar from './components/NavBar';

import GigsHome from './components/gigs/GigsHome';
import GigList from './components/gigs/GigList';
import Gig from './components/gigs/Gig';
import GigNew from './components/gigs/GigNew';
import GigNext from './components/gigs/GigNext'
//import NewGig from './components/NewGig';

import GroupsHome from './components/groups/GroupsHome';
import GroupList from './components/groups/GroupList';
import Group from './components/groups/Group';
import GroupNew from './components/groups/GroupNew';
import GroupGigs from './components/groups/GroupGigs';
import GroupMessages from './components/groups/GroupMessages';

import PersonsHome from './components/persons/PersonsHome';
import PersonList from './components/persons/PersonList';
import Person from './components/persons/Person';
import PersonNew from './components/persons/PersonNew'; 

import ActsHome from './components/acts/ActsHome';
import ActList from './components/acts/ActList';
import Act from './components/acts/Act';
import ActNew from './components/acts/ActNew';

import VenuesHome from './components/venues/VenuesHome';
import VenueList from './components/venues/VenueList';
import Venue from './components/venues/Venue';
import VenueNew from './components/venues/VenueNew';

import OrganisationsHome from './components/organisations/OrganisationsHome';
import OrganisationList from './components/organisations/OrganisationList';
import Organisation from './components/organisations/Organisation';
import OrganisationNew from './components/organisations/OrganisationNew';

import MessagesHome from './components/messages/MessagesHome';
import MessageList from './components/messages/MessageList';
import Message from './components/messages/Message';
import MessageNew from './components/messages/MessageNew';

const MainContainer = ({ addresses, details, organisations, persons,  
                        messages, venues, acts, groups, bookings, gigs, 
                        setAddresses, setDetails, setOrganisations,
                        setPersons, setMessages, setVenues, setActs, 
                        setGroups, setBookings, setGigs, reloads, setReloads}) => {

  let sortedGigs = gigs;
  let futureGigs;
   if (gigs){
  //   if (gigs.length > 1) {
  //     sortedGigs = [...gigs].sort((gig1, gig2) => (new Date(gig2.startTime) - new Date(gig1.startTime)));
      const now = new Date();
      // The array sortedGigs is in reverse chronological order.
      // Use reverse() to put it into chronological order.

      sortedGigs = sortObjectsChronologically(gigs, 'startTime', false);
      futureGigs = [...sortedGigs].reverse().filter((item) => new Date(item.startTime) >= now);
    
    }


  return (
    <div className="App">
      
        <NavBar />

        <Routes>
          <Route index element={ gigs ? <GigNext filteredGigs={futureGigs} /> : <Loading />} />

          <Route path = 'gigs' element={ gigs ? <GigsHome filteredGigs={sortedGigs} /> : <Loading />} >
            <Route index element = { gigs ? <GigList filteredGigs = {sortedGigs} futureGigs = {futureGigs}/> : <Loading />} />
            <Route path = 'new' element = { venues && acts ? <GigNew venues={venues} acts={acts} groups={groups} reloads={reloads} setReloads={setReloads} /> :  <Loading />} />
            <Route path = ':id' element = { gigs ? <Gig gigs={gigs} /> : <Loading />} /> 
          </Route> 
      
          <Route path = 'people' element={ persons ? <PersonsHome persons={persons} /> :  <Loading />} >
            <Route index element = { persons ? <PersonList persons={persons} /> :  <Loading />} />
            <Route path = 'new' element={ organisations && persons && details ? 
              <PersonNew organisations={organisations} reloads={reloads} setReloads={setReloads} />  : <Loading />} />
            <Route path = ':id' element={ persons ? <Person persons={persons}  />  : <Loading />} />         
          </Route>

          <Route path = 'venues' element={ venues ? <VenuesHome venues={venues} /> :  <Loading />} >
            <Route index element = { venues ? <VenueList venues={venues} /> :  <Loading />} />
            <Route path = 'new' element={ venues && addresses ? <VenueNew reloads={reloads} setReloads={setReloads} />  : <Loading />} />
            <Route path = ':id' element={ venues ? <Venue venues={venues}  />  : <Loading />} />
          </Route>

          <Route path = 'bookings' element = { groups ? <GroupsHome groups={groups} /> :  <Loading />} >
            <Route index element = { groups ? <GroupList groups={groups} /> :  <Loading />} />
            <Route path = 'new' element = { groups && persons ? <GroupNew persons={persons} reloads={reloads} setReloads={setReloads} /> :  <Loading />} />
            <Route path = ':id' element ={ groups ? <Group groups={groups}  />  : <Loading />} />
            <Route path = ':id/gigs' element = { groups ? <GroupGigs groups={groups} nextGig={null} useNextGig={false}  />  : <Loading />} />
            <Route path = ':id/messages' element = { groups ? <GroupMessages groups={groups} />  : <Loading />} />
          </Route>

          <Route path = 'acts' element={ acts ? <ActsHome acts={acts} /> :  <Loading />} >
            <Route index element = { acts ? <ActList acts={acts} /> :  <Loading />} />
            <Route path = 'new' element={ acts ? <ActNew reloads={reloads} setReloads={setReloads} />  : <Loading />} />
            <Route path = ':id' element={ acts && gigs ? <Act acts={acts} gigs={gigs} />  : <Loading />} />
          </Route>

          <Route path = 'organisations' element={ organisations ? <OrganisationsHome organisations={organisations} /> :  <Loading />} >
            <Route index element = { organisations ? <OrganisationList organisations={organisations} /> :  <Loading />} />
            <Route path = 'new' element={ organisations && addresses ? <OrganisationNew reloads={reloads} setReloads={setReloads}/>  : <Loading />} />
            <Route path = ':id' element={ organisations ? <Organisation organisations={organisations}  />  : <Loading />} />
          </Route>

          <Route path = 'messages' element={ messages ? <MessagesHome messages={messages} /> :  <Loading />} >
            <Route index element = { messages ? <MessageList messages={messages} /> :  <Loading />} />
            <Route path = 'new' element={ messages && groups ? <MessageNew groups={groups} reloads={reloads} setReloads={setReloads}/>  : <Loading />} />
            <Route path = ':id' element={ messages ? <Message messages={messages}  />  : <Loading />} />
          </Route>
        </Routes>


    </div>

  )
}

export default MainContainer;
