import React from 'react';
import { dateTimeStringToDate, dateTimeStringToTime } from '../../helpers/functions';


const GigDetails = ({gig}) => {

    return (
      <div className = "table">
        <div className = "tr">
          <div className = "td">Date:</div><div className = "td">{dateTimeStringToDate(gig.startTime)}</div>
        </div>
        <div className = "tr">
          <div className = "td">Act:</div><div className = "td">{gig.act.name}</div>
        </div>
        <div className = "tr">
          <div className = "td">Venue:</div><div className = "td">{gig.venue.name}</div>
        </div>
        <div className = "tr">
          <div className = "td">Type:</div><div className = "td">{gig.rehearsal ? "REHEARSAL" : "PERFORMANCE"}</div>
        </div>
        <div className = "tr">
          <div>Arrival Time:</div><div className = "td">{dateTimeStringToTime(gig.arrivalTime)}</div>
        </div>
        <div className = "tr">
          <div className = "td">Start Time:</div><div className = "td">{dateTimeStringToTime(gig.startTime)}</div>
        </div>
        <div className = "tr">
          <div className = "td">End Time:</div><div className = "td">{dateTimeStringToTime(gig.endTime)}</div>
        </div>
        <div className = "tr">
          <div className = "td">Playing Time:</div><div className = "td">{gig.playingTime} mins</div>
        </div>
        <div className = "tr">
          <div className = "td">Dress Code:</div><div className = "td">{gig.dressCode}</div>
        </div>
        <div className = "tr">
          <div className = "td">Food Provided:</div><div className = "td">{gig.foodProvided? "YES" : "NO"}</div>
        </div>
        <div className = "tr">
          <div className = "td">Sound Check:</div><div className = "td">{gig.soundCheck? "YES" : "NO"}</div>
        </div>
      </div>
    );
};

export default GigDetails;

