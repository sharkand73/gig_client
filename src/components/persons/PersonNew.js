import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Request from  '../../helpers/request';
import { emptyAddress, emptyDetails, emptyPerson, countryOptions } from '../../helpers/formHelper';
import { objectsAreEqual } from '../../helpers/functions';
import Loading from '../Loading';


const PersonNew = ({organisations, reloads, setReloads }) => {
    
    const [addressData, setAddressData] = useState(emptyAddress);
    const [detailsData, setDetailsData] = useState(emptyDetails);
    const [personData, setPersonData] = useState(emptyPerson);
    const [sendDetails, setSendDetails] = useState(false);
    const [sendPerson, setSendPerson] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formProcessed, setFormProcessed] = useState(false);

   useEffect(() => {
    if (sendPerson){
        postPerson(personData);
        }
    }, [sendPerson]);

    useEffect(() => {
         if (sendDetails){
             postDetails(detailsData)
            }
    }, [sendDetails]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        postAddress(addressData); 
    }

    const postAddress = (address) => {
        if (objectsAreEqual(addressData, emptyAddress)){
            setDetailsData({...detailsData, address: null});
            setSendDetails(true);
        }
        else {
            const request = new Request();
            request.post('/addresses', address)
            .then(res => res.json())
            .then((data) => {
                console.log('data back from db', data);
                setDetailsData({...detailsData, address: {id: data.id}});
                setSendDetails(true);            
            });
        }        
    }
    
    const postDetails = (details) => {
        const request = new Request();
        request.post('/details', details)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setPersonData({...personData, details: {id: data.id}}); 
            setSendPerson(true);
        })
    }

    const postPerson = (person) => {
        const request = new Request();
        request.post('/persons', person)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setFormProcessed(true);
            setReloads(reloads + 1);   
        })
    }

    const onAddressChange = (e) => {
        let tempData = {...addressData};
        tempData[e.target.name] = e.target.value;
        setAddressData(tempData);
    }

    const onDetailsChange = (e) => {
        let tempData = {...detailsData};
        tempData[e.target.name] = e.target.value;
        setDetailsData(tempData);
    }

    const onPersonChange = (e) => {
        let tempData = {...personData};
        tempData[e.target.name] = e.target.value;
        setPersonData(tempData);
    }

    const onOrgChange = (e) => {
        let tempData = {...personData};
        tempData.organisation = e.target.value ? {id: e.target.value} : null;
        setPersonData(tempData);
    }

    const organisationOptions = organisations.map((org) => (
        <option key={org.id} value={org.id}>
            {org.name}
        </option>
    ));

    return (
        <div className = 'form-container'>
            <div>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' name='firstName' value={personData.firstName} onChange = {onPersonChange} required />
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' name='lastName' value={personData.lastName} onChange = {onPersonChange} required />
                    </div>
                    <div>
                        <label htmlFor='organisation'>Organisation</label>
                        <select name='organisation' onChange={onOrgChange} >
                            <option key={0} value={0}>None</option>
                            {organisationOptions}
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
                        <label htmlFor='mobile'>Mobile</label>
                        <input type='text' name='mobile' value={detailsData.mobile} onChange = {onDetailsChange} />
                    </div>
                    <div>
                        <label htmlFor='altPhone' >Alt. Phone</label>
                        <input type='text' name='altPhone' value={detailsData.altPhone} onChange = {onDetailsChange} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' value={detailsData.email} onChange = {onDetailsChange} />
                    </div>
                    <div>
                        <label htmlFor='altEmail'>Alt. Email</label>
                        <input type='text' name='altEmail' value={detailsData.altEmail} onChange = {onDetailsChange} />
                    </div>
                    <div>
                        <input type='submit' value='Save' />  
                    </div>         
                </form>
                {formSubmitted && <Loading />}
                {formProcessed && <Navigate to='/people' /> }
            </div>
        </div>
    )
}

export default PersonNew;