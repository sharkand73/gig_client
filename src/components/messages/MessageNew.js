import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Request from  '../../helpers/request';
import { emptyMessage } from '../../helpers/formHelper';
import { sortObjectsChronologically } from '../../helpers/functions';
import { bookingMethods, convertEnumToString } from '../../helpers/enumHelper';
import Loading from '../Loading';


const MessageNew = ({groups, reloads, setReloads }) => {
    
    const [messageData, setMessageData] = useState(emptyMessage);
    const [sendData, setSendData] = useState(false);
    const [formProcessed, setFormProcessed] = useState(false);

   useEffect(() => sendData && postMessage(messageData), [sendData]);
    const postMessage = (message) => {
        const request = new Request();
        request.post('/messages', message)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setFormProcessed(true);
            setReloads(reloads + 1);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (messageData.bookingGroup && messageData.bookingGroup.id === -1){
            const tempData = {...messageData};
            tempData.bookingGroup = null;
            setMessageData(tempData);
        }
        setSendData(true);      
    }

    const onChange = (e) => {
        let tempData = {...messageData};
        tempData[e.target.name] = e.target.value;
        setMessageData(tempData);
    }

    const onGroupChange = (e) => {
        let tempData = {...messageData};
        tempData.bookingGroup = tempData.bookingGroup = {id: e.target.value};
        setMessageData(tempData);
    }

    const getBookingGroupValue = () => {
        let group = messageData.bookingGroup;
        return group !== null ? group.id : -1;
    }

    let orderedGroups = sortObjectsChronologically(groups, 'bookingDate', false);

    const bookingGroupOptions = orderedGroups.map((group, index) => { return (
        <option key={index} value={group.id}>
            {group.bookingCode}
        </option>
    )
    })

    const methodOptions = bookingMethods.map((method, index)=>{
        return (
            <option key={index} value={method}>
                {convertEnumToString(method)}
            </option>
        )
    })

    return (
        <div className = 'form-container'>
            <div>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor='date'>Message Date</label>
                        <input type='date' name='date' value={messageData.date} onChange = {onChange} required />
                    </div>
                    <div>
                        <label htmlFor='messageType'>Booking Number</label>
                        <select name='group' onChange={onGroupChange} value={getBookingGroupValue()} >
                            <option value={-1}>None</option>
                            {bookingGroupOptions}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='bookingMethod'>Booking Method </label>
                        <select name='bookingMethod' value={messageData.bookingMethod} onChange = {onChange} >
                            <option disabled value=''>Select a booking method</option>
                            {methodOptions}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='body'>Message Body</label>
                        <textarea maxLength={1000} name='body' value={messageData.body} onChange = {onChange} rows="10"></textarea>
                    </div>
                    <div>
                        <input type='submit' value='Save' />  
                    </div>         
                </form>
                {sendData && <Loading />}
                {formProcessed && <Navigate to='/messages' /> }
            </div>
        </div>
    )
}

export default MessageNew;