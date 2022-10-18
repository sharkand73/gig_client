import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { emptyGig, emptyBooking, gigTypeOptions, dressCodeOptions, statusOptions } from "../../helpers/formHelper";
import { sortObjectsAlphabetically, addDay, combineDateAndTime } from "../../helpers/functions";
import Request from "../../helpers/request";
import Loading from "../Loading";

const GigNew = ({venues, acts, groups, reloads, setReloads}) => {

    const emptyTimes = {arrival: "", start: "", end: ""};
    const [gigData, setGigData] = useState(emptyGig);
    const [eventDate, setEventDate] = useState("");
    const [times, setTimes] = useState(emptyTimes);
    const [bookingData, setBookingData] = useState(emptyBooking);
    const [processGig, setProcessGig] = useState(false);
    const [sendGig, setSendGig] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formProcessed, setFormProcessed] = useState(false);


    useEffect(() => console.log(gigData), [gigData]);
    useEffect(() => console.log(times), [times]);
    useEffect(() => {
        if (processGig){
            processGigData();
        }
    }, [processGig]);
   
    useEffect(() => {
        if (sendGig) {
            postGig();
        }
    }, [sendGig]);

    if (!venues){
        return (<Loading />);
    }

    const sortedVenues = sortObjectsAlphabetically(venues, 'name');
    const venueOptions = sortedVenues.map((venue, index) => {
        return (
            <option key={index} value={venue.id}>{venue.name}</option>
        )
    });
    const sortedActs = sortObjectsAlphabetically(acts, 'name');
    const actOptions = sortedActs.map((act, index) => {
        return (
            <option key={index} value={act.id}>{act.name}</option>
        )
    });

    const groupOptions = groups.map((group, index) => {
        return (
            <option key={index} value={group.id}>{group.bookingCode}</option>
        )
    });

    const onGigChange = (e) => {
        const tempData = {...gigData};
        tempData[e.target.name] = e.target.value;
        setGigData(tempData);
    }
    const onSelectChange = (e) => {
        const tempData = {...gigData};
        tempData[e.target.name] = e.target.value === '' ? null : {'id': parseInt(e.target.value)};
        setGigData(tempData);
    }

    const onGroupChange = (e) => {
        const tempData = {...bookingData};
        tempData[e.target.name] = e.target.value === '' ? null : {'id': parseInt(e.target.value)};
        setBookingData(tempData);
    }

    const onTimeChange = (e) => {
        const tempData = {...times};
        tempData[e.target.name] = e.target.value;
        setTimes(tempData);
    }

    const onCheckBoxChange = (e) => {
        const tempData = {...gigData};
        tempData[e.target.name] = !tempData[e.target.name];
        setGigData(tempData);
    }

    const onBookingChange = (e) => {
        const tempData = {...bookingData};
        tempData[e.target.name] = e.target.value;
        setBookingData(tempData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(gigData);
        console.log(bookingData);
        const bookingToSend = {...bookingData};
        const processDate = (d) => (d === "" ? null : d);
        bookingToSend.dateConfirmed = processDate(bookingToSend.dateConfirmed);
        bookingToSend.dateCancelled = processDate(bookingToSend.dateCancelled);
        bookingToSend.dateFeePaid = processDate(bookingToSend.dateFeePaid);
        bookingToSend.dateExpensesPaid = processDate(bookingToSend.dateExpensesPaid);
        setFormSubmitted(true);
        postBooking(bookingToSend);
    }

    const postBooking = (booking) => {
        const request = new Request();
        request.post('/bookings', booking)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setGigData({...gigData, booking: {id: data.id}});
            setProcessGig(true);
        });
    }
    
    const processGigData = () => {
        const gigToSend = {...gigData};
        console.log(`Gig to send has booking ${gigToSend.booking}`);
        // process times
        if (times.arrival > times.start){
            setTimes({arrival: times.start,
                    start: times.start,
                    end: times.end});
        }
        // Set the arrival and start datetimes in gigToSend
        gigToSend.arrivalTime = combineDateAndTime(eventDate, times.arrival); 
        gigToSend.startTime = combineDateAndTime(eventDate, times.start); 
        let finishDate = eventDate;
        if (times.end < times.start){
            finishDate = addDay(finishDate);
        }
        gigToSend.endTime = combineDateAndTime(eventDate, times.end); 
        setGigData(gigToSend);
        setSendGig(true);
    }

    const postGig = () => {
        const request = new Request();
        request.post('/gigs', gigData)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setReloads(reloads + 1);
            setFormProcessed(true);
        });
    }

    return (
        <div className = 'form-container'>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label className="label" htmlFor="date">Date</label>
                        <input type="date" value={eventDate} onChange={(e)=>setEventDate(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="venue">Venue</label>
                        <select name="venue" onChange={onSelectChange} defaultValue='' required>
                            <option disabled value=''>Select Venue</option>
                            {venueOptions}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="act">Act</label>
                        <select name="act" onChange={onSelectChange} defaultValue='' required>
                        <option disabled value=''>Select Act</option>
                            {actOptions}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="arrivalTime">Arrival Time</label>
                        <input type='time' step='300' name='arrival' value={times.arrival} onChange={onTimeChange} required />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="startTime">Start Time</label>
                        <input type='time' step='300' name='start' value={times.start} onChange={onTimeChange} required />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="endTime">End Time</label>
                        <input type='time' step='300' name='end' value={times.end} onChange={onTimeChange} required />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="Playing Time">Playing Time</label>
                        <input type='number' min={0} max={300} step={10} name='playingTime' value={gigData.playingTime} onChange={onGigChange} required />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="Gig Type">Gig Type</label>
                        <select name="gigType" value={gigData.gigType} onChange={onGigChange} required>
                            {gigTypeOptions}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="Dress Code">Dress Code</label>
                        <select name="dressCode" value={gigData.dressCode} onChange={onGigChange} required>
                            {dressCodeOptions}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="Sound Check">Sound Check</label>
                        <input type="checkbox" name="soundCheck" value={gigData.soundCheck} onChange={onCheckBoxChange} />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="Food Provided">Food Provided</label>
                        <input type="checkbox" name="foodProvided" value={gigData.foodProvided} onChange={onCheckBoxChange} />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="Distance Driven">Distance Driven</label>
                        <input type='number' min={0} max={2000} step={1} name='distanceDriven' value={gigData.distanceDriven} onChange={onGigChange} required/>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="Money Spent">Money Spent</label>
                        <input type='number' min={0} max={300} step={0.01} name='moneySpent' value={gigData.moneySpent} onChange={onGigChange} />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="Booking Group">Booking</label>
                        <select name="bookingGroup" onChange={onGroupChange} defaultValue='' required>
                            <option disabled value=''>Select Booking Code</option>
                            {groupOptions}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="Fee">Fee</label>
                        <input type='number' min={0} max={2000} step={0.01} name='fee' value={bookingData.fee} onChange={onBookingChange} required/>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="status">Status</label>
                        <select name="status" onChange={onBookingChange} required>
                            {statusOptions}
                        </select>
                    </div>
                    {bookingData.status !== 'UNCONFIRMED' && <div>
                        <label className="label" htmlFor="dateConfirmed">Date Confirmed</label>
                        <input type="date" name='dateConfirmed' value={bookingData.dateConfirmed} onChange={onBookingChange} />
                    </div>}
                    {bookingData.status === 'CANCELLED' && <div>
                        <label className="label" htmlFor="dateCancelled">Date Cancelled</label>
                        <input type="date" name='dateCancelled' value={bookingData.dateCancelled} onChange={onBookingChange} />
                    </div>}
                    {(bookingData.status==='CLOSED' || bookingData.status==='CANCELLED') && <div>
                        <label className="label" htmlFor="dateFeePaid">Date Fee Paid</label>
                        <input type="date" name='dateFeePaid' value={bookingData.dateFeePaid} onChange={onBookingChange} />
                    </div>}
                    {(bookingData.status==='CLOSED' || bookingData.status==='CANCELLED') && <div>
                        <label className="label" htmlFor="dateExpensesPaid">Date Expenses Paid</label>
                        <input type="date" name='dateExpensesPaid' value={bookingData.dateExpensesPaid} onChange={onBookingChange} />
                    </div>}
                    <div className="form-group">
                        <input type="submit" value="Save" />
                    </div>
                </form>            
                {formSubmitted && <Loading />}
                {formProcessed && <Navigate to='/gigs' /> }
            </div>
        </div>        
    );
}

export default GigNew;