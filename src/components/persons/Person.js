import React from 'react';
import Moment from 'react-moment';
import {Link, useParams} from 'react-router-dom';
import { findById, dateTimeStringToDate, dateTimeStringToTime } from '../../helpers/functions';

import Error from '../Error';


const Person = ({persons}) => {

    const id  = parseInt(useParams().id);
    const person = findById(persons, id);

    //console.log(id);
    //console.log(person.email);
    
    if (!person){
      return (
        <Error entity = {"person"} />
      )
    };

    return (
      <div className = "table">
        <div className = "tr">
          <div className = "td">First Name:</div><div className = "td">{person.FirstName}</div>
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
          <div>Email:</div><div className = "td">{person.details.email}</div>
        </div>
      </div>
    );
};

export default Person;

