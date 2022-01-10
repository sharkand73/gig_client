import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GigList from './components/GigList';
import Gig from './components/Gig';
import Loading from './components/Loading';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {

  const baseUrl = 'http://localhost:8080/api';

  const [gigs, setGigs] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/gigs`)
    .then(results => results.json())  
    .then(data => setGigs(data))
  }, []);

  let sortedGigs;
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
          <Route path = '/gigs/:id' element = {gigs ? <Gig gigs={gigs} setGigs={setGigs}/> : <Loading />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App;
