import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Request from  '../../helpers/request';
import { emptyAddress, emptyMessage, countryOptions, messageOptions } from '../../helpers/formHelper';



const MessageNew = ({messages, setMessages, addresses, setAddresses }) => {
    
    emptyAddress.country = "Scotland";

    const [addressData, setAddressData] = useState(emptyAddress);
    const [messageData, setMessageData] = useState(emptyMessage);
    const [sendMessage, setSendMessage] = useState(false);
    const [finalMessage, setFinalMessage] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        if (finalMessage){
            setMessages([...messages, finalMessage]);
            setFormSubmitted(true);
            }
   }, [finalMessage]);

    useEffect(() => {
        if (sendMessage){
            postMessage(messageData)
            }
   }, [sendMessage]);

    const postAddress = (address) => {
        const request = new Request();
        request.post('/addresses', address)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setMessageData({...messageData, address: {id: data.id}});
            setSendMessage(true);
            setAddresses([...addresses, data])
        })
      }

    const postMessage = (message) => {
        const request = new Request();
        request.post('/messages', message)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setFinalMessage({...data, address: addressData});
        })
    }

    const onAddressChange = (e) => {
        let tempData = {...addressData};
        tempData[e.target.name] = e.target.value;
        setAddressData(tempData);
    }

    const onMessageChange = (e) => {
        let tempData = {...messageData};
        tempData[e.target.name] = e.target.value;
        setMessageData(tempData);
    }

    const onMessageTypeChange = (e) => {
        let tempData = {...messageData};
        tempData.messageType = e.target.value ? e.target.value : "";
        setMessageData(tempData);
    }

    const onCoordsChange = (e) => {
        let tempData = {...messageData};
        tempData[e.target.name] = e.target.value ? parseFloat(e.target.value) : "";
        setMessageData(tempData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postAddress(addressData); 
    }

    return (
        <div className = 'form-container'>
            <div>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' value={messageData.name} onChange = {onMessageChange} required />
                    </div>
                    <div>
                        <label htmlFor='messageType'>Type</label>
                        <select name='messageType' onChange={onMessageTypeChange} defaultValue='' required>
                            <option disabled value=''>Select Message Type</option>
                            {messageOptions}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='addressLine1'>Address Line 1</label>
                        <input type='text' name='addressLine1' value={addressData.addressLine1} onChange = {onAddressChange} />
                    </div>
                    <div>
                        <label htmlFor='addressLine2'>Address Line 2</label>
                        <input type='text' name='addressLine2' value={addressData.addressLine2} onChange = {onAddressChange} />
                    </div>
                    <div>
                        <label htmlFor='city' >City</label>
                        <input type='text' name='city' value={addressData.city} onChange = {onAddressChange} />
                    </div>
                    <div>
                        <label htmlFor='region'>Region</label>
                        <input type='text' name='region' value={addressData.region} onChange = {onAddressChange}/>
                    </div>
                    <div>
                        <label htmlFor='postcode'>Postcode</label>
                        <input type='text' name='postcode' value={addressData.postcode} onChange = {onAddressChange} />
                    </div>
                    <div>
                        <label htmlFor='country'>Country</label>
                        <select name='country' value={addressData.country} onChange = {onAddressChange} >
                        {countryOptions}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='coordinatesE'>Coordinates</label>
                        <input type='number' name='coordinatesE' value={messageData.coordinatesE} onChange = {onCoordsChange} />&#176;E
                        <input type='number' name='coordinatesN' value={messageData.coordinatesN} onChange = {onCoordsChange} />&#176;N
                    </div>
          
                    <div>
                        <input type='submit' value='Submit' />  
                    </div>         
                </form>
                {formSubmitted && <Navigate to='/messages' /> }
            </div>
        </div>
    )
}

export default MessageNew;