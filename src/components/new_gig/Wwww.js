// Where, when, what, who (and how much)

import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

import { dateTimeStringToDate } from '../../helpers/functions';


const Wwww = ({formData, setFormData, currentPage, setCurrentPage, acts, venues}) => {
  
  const actOptions = acts.map((act, index) => 
      <option key={index} value={act}>{act.name}</option>
    );

  const venueOptions = venues.map((venue, index) => 
      <option key={index} value={venue}>{venue.name}</option>
    );
    
  return (
    <div className="form-container">
      
      
        <label htmlFor='date'>When is it?</label>
        <input type='date' name='date' />
        <label htmlFor='venue'>Where is it?</label>
        <select name='venue'>
          {venueOptions}
        </select>
        <label htmlFor='act'>Who is it with?</label>
        <select name='act'>
          {actOptions}
        </select>
        <label htmlFor='rehearsal'>Tick for rehearsal</label>
        <input type='checkbox' name='isRehearsal' />
        <label htmlFor='fee'>How much does it pay?</label>
        <input type='number' name='fee' />
      
        
    </div>
  )};


export default Wwww;
