import React from 'react';
import { dateTimeStringToDate, dateTimeStringToTime } from '../../helpers/functions';
import { convertEnumToString } from '../../helpers/enumHelper';

const GigDetails = ({gig}) => {

    return (
      <div className = "table">
        <div className = "tr">
          <div className = "td">Date</div><div className = "td">{dateTimeStringToDate(gig.startTime)}</div>
        </div>
        <div className = "tr">
          <div className = "td">Act</div><div className = "td">{gig.act.name}</div>
        </div>
        <div className = "tr">
          <div className = "td">Venue</div><div className = "td">{gig.venue.name}</div>
        </div>
        <div className = "tr">
          <div className = "td">Type</div><div className = "td">{convertEnumToString(gig.gigType)}</div>
        </div>
        <div className = "tr">
          <div className = "td">Arrival Time</div><div className = "td">{dateTimeStringToTime(gig.arrivalTime)}</div>
        </div>
        <div className = "tr">
          <div className = "td">Start Time</div><div className = "td">{dateTimeStringToTime(gig.startTime)}</div>
        </div>
        <div className = "tr">
          <div className = "td">End Time</div><div className = "td">{dateTimeStringToTime(gig.endTime)}</div>
        </div>
        <div className = "tr">
          <div className = "td">Playing Time</div><div className = "td">{gig.playingTime} mins</div>
        </div>
        <div className = "tr">
          <div className = "td">Dress Code</div><div className = "td">{convertEnumToString(gig.dressCode)}</div>
        </div>
        <div className = "tr">
          <div className = "td">Food Provided</div><div className = "td">{gig.foodProvided? "Yes" : "No"}</div>
        </div>
        <div className = "tr">
          <div className = "td">Sound Check</div><div className = "td">{gig.soundCheck? "Yes" : "No"}</div>
        </div>
      </div>
    );
};

export default GigDetails;

