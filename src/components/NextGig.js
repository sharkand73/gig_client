import React from 'react';
import Moment from 'react-moment';
import {Link, useParams} from 'react-router-dom';
import { findById, dateTimeStringToDate, dateTimeStringToTime } from '../helpers/functions';


const NextGig = ({gig}) => {


    return (
      <div className = "table">
        <div className = "row">
          <div className = "column1">Date:</div><div className = "column2">{dateTimeStringToDate(gig.startTime)}</div>
        </div>
        <div className = "row">
          <div className = "column1">Act:</div><div className = "column2">{gig.act.name}</div>
        </div>
        <div className = "row">
          <div className = "column1">Venue:</div><div className = "column2">{gig.venue.name}</div>
        </div>
        <div className = "row">
          <div className = "column1">Type:</div><div className = "column2">{gig.isRehearsal ? "REHEARSAL" : "PERFORMANCE"}</div>
        </div>
    
      </div>
    );
};

export default NextGig;

