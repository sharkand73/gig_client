import React from 'react';
import { Link } from 'react-router-dom';

const PersonList = ({ persons }) => {
  
  let personRows = {};
  if (persons){
  personRows = persons.map((person, index) => {
    
    return (
        <Link to={person.id.toString()} key={index} className="tr">            
          <div className="td">{person.firstName} {person.lastName}</div>
        </Link>
    );
  })};

  return (
    <div className="person-list list">
      
      <h1>People</h1> 
      <div className="table">      
        {personRows}       
      </div>     
    </div>
  )};


export default PersonList;
