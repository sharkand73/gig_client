import React from 'react';
import { useParams } from 'react-router-dom';
import { findById } from '../../helpers/functions';

import Back from '../buttons/Back';
import Error from '../Error';


const Person = ({persons}) => {

    const id  = parseInt(useParams().id);
    const person = findById(persons, id);
    
    if (!person){
      return (
        <Error entity = {"person"} />
      )
    };

    return (
      <div className = "table">
        <div className = "tr">
          <div className = "td">First Name:</div><div className = "td">{person.firstName}</div>
        </div>
        <div className = "tr">
          <div className = "td">Last Name:</div><div className = "td">{person.lastName}</div>
        </div>
        <div className = "tr">
          <div className = "td">Mobile:</div><div className = "td">{person.details.mobile}</div>
        </div>
        <div className = "tr">
          <div className = "td">Alt. Phone:</div><div className = "td">{person.details.altPhone}</div>
        </div>
        <div className = "tr">
          <div className = "td">Email:</div><div className = "td">{person.details.email}</div>
        </div>
        <Back />
      </div>
    );
};

export default Person;

