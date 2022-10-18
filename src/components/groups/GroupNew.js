import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Request from  '../../helpers/request';
import { emptyGroup, paymentOptions } from '../../helpers/formHelper';
import { sortObjectsAlphabetically, findById } from '../../helpers/functions';
import Loading from '../Loading';


const GroupNew = ({ persons, reloads, setReloads }) => {

    const [groupData, setGroupData] = useState(emptyGroup);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formProcessed, setFormProcessed] = useState(false);

    useEffect(() => console.log(groupData), [groupData]);
    useEffect(() => setCode(calculateBookingCode()), [groupData.booker, groupData.bookingDate]);

    const sortedPersons = sortObjectsAlphabetically(persons, 'lastName');
    const personOptions = sortedPersons.map((person, index) => {
        return (
            <option key={index} value={person.id}>{person.firstName} {person.lastName}</option>
        )
    })

    const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    postGroup(groupData); 
    }

    const postGroup = (group) => {
        const request = new Request();
        request.post('/groups', group)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setFormProcessed(true);
            setReloads(reloads + 1);
        })
    }    

    const onChange = (e) => {
        let tempData = {...groupData};
        tempData[e.target.name] = e.target.value;
        setGroupData(tempData);
    }

    const onBookerChange = (e) => {
        let tempData = {...groupData};
        tempData[e.target.name] = e.target.value === '' ? null : {'id': parseInt(e.target.value)};
        setGroupData(tempData);       
    }

    const onArchivedChange = (e) => {
        let tempData = {...groupData};
        tempData.archived = !tempData.archived;
        setGroupData(tempData);
    }

    const calculateBookingCode = () => {
        const booker = groupData.booker ? findById(persons, groupData.booker.id) : null;
        if (booker && groupData.bookingDate != ''){
            const firstPart = booker.firstName.slice(0,1).toUpperCase();
            const secondPart = booker.lastName.slice(0,6).toUpperCase();
            const thirdPart = groupData.bookingDate.replace('-', '').replace('-','');
            return firstPart + secondPart + thirdPart;
        }
        else {
            return '';
        }
    }

    const setCode = (code) => {
        const tempData = {...groupData};
        tempData.bookingCode = code;
        setGroupData(tempData);
    }

    return (
        <div className = 'form-container'>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label className="label" htmlFor='booker'>Booker</label>
                        <select name='booker' onChange = {onBookerChange} defaultValue='' required >
                            <option disabled key={-1} value=''>Select Person</option>
                            {personOptions}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='bookingDate'>Booking Date</label>
                        <input type='date' name='bookingDate' onChange={onChange} value={groupData.bookingDate} required />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='bookingCode'>Booking Code</label>
                        <input type='text' disabled value={groupData.bookingCode} />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='feePaymentMethod'>Fee Payment Method</label>
                        <select name='feePaymentMethod' value={groupData.feePaymentMethod} onChange = {onChange} >
                        {paymentOptions}
                        </select>
                    </div>
                    <div className="form-group">
                    <label className="label" htmlFor='expensesPaymentMethod'>Expenses Payment Method</label>
                        <select name='expensesPaymentMethod' value={groupData.expensesPaymentMethod} onChange = {onChange} >
                        {paymentOptions}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='archived'>Archived</label>
                        <input type='checkbox' name='archived' value={groupData.archived} onChange = {onArchivedChange} />
                    </div>
                    <div className="form-group">
                        <input type='submit' value='Save' />  
                    </div>          
                </form>
                {formSubmitted && <Loading />}
                {formProcessed && <Navigate to='/bookings' /> }
            </div>
        </div>
    )
}

export default GroupNew;