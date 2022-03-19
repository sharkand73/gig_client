import React, {useState} from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

import Wwww from './new_gig/Wwww';

const NewGig = ({gigs, setGigs, acts, venues, bookings, groups}) => {
  
  const [formData, setFormData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const formPages = [
  <Wwww formData={formData} setFormData={setFormData} currentPage={currentPage} setCurrentPage={setCurrentPage} acts={acts} venues={venues}/>
]

  return (
    <div className="new-gig">
      
      <h1>New Gig</h1> 
      {formPages[currentPage]}
        
    </div>
  )};


export default NewGig;
