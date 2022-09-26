import React from 'react';
import { Link } from 'react-router-dom';
import { sortObjectsAlphabetically } from '../../helpers/functions';

const PersonList = ({ persons }) => {
  
  const sortedPersons = sortObjectsAlphabetically(persons, 'lastName');

  let personRows = {};
  if (persons){
  personRows = sortedPersons.map((person, index) => {
    
    return (
        <Link to={person.id.toString()} key={index} className="tr">            
          <div className="td">{person.firstName} {person.lastName}</div>
        </Link>
    );
  })};

  return (
    <>
      <h1>People</h1> 
      <div className="item-list">
        <div className="table">      
          {personRows}       
        </div>     
      </div>
    </>
  )};


export default PersonList;
