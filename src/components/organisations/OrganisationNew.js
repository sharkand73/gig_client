import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Request from  '../../helpers/request';
import { emptyAddress, emptyOrganisation, countryOptions } from '../../helpers/formHelper';
import Loading from '../Loading';



const OrganisationNew = ({reloads, setReloads }) => {
    
    emptyAddress.country = "Scotland";

    const [addressData, setAddressData] = useState(emptyAddress);
    const [organisationData, setOrganisationData] = useState(emptyOrganisation);
    const [sendOrganisation, setSendOrganisation] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formProcessed, setFormProcessed] = useState(false);


    useEffect(() => {
        if (sendOrganisation){
            postOrganisation(organisationData)
            }
    }, [sendOrganisation]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        postAddress(addressData); 
    }

    const postAddress = (address) => {
        const request = new Request();
        request.post('/addresses', address)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setOrganisationData({...organisationData, address: {id: data.id}});
            setSendOrganisation(true);
        })
    }

    const postOrganisation = (organisation) => {
        const request = new Request();
        request.post('/organisations', organisation)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setFormProcessed(true);
            setReloads(reloads + 1); ;
        })
    }

    const onAddressChange = (e) => {
        let tempData = {...addressData};
        tempData[e.target.name] = e.target.value;
        setAddressData(tempData);
    }

    const onOrganisationChange = (e) => {
        let tempData = {...organisationData};
        tempData[e.target.name] = e.target.value;
        setOrganisationData(tempData);
    }


    return (
        <div className = 'form-container'>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label className="label" htmlFor='name'>Name</label>
                        <input type='text' name='name' value={organisationData.name} onChange = {onOrganisationChange} required />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='addressLine1'>Address Line 1</label>
                        <input type='text' name='addressLine1' value={addressData.addressLine1} onChange = {onAddressChange} />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='addressLine2'>Address Line 2</label>
                        <input type='text' name='addressLine2' value={addressData.addressLine2} onChange = {onAddressChange} />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='city' >City</label>
                        <input type='text' name='city' value={addressData.city} onChange = {onAddressChange} />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='region'>Region</label>
                        <input type='text' name='region' value={addressData.region} onChange = {onAddressChange}/>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='postcode'>Postcode</label>
                        <input type='text' name='postcode' value={addressData.postcode} onChange = {onAddressChange} />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='country'>Country</label>
                        <select name='country' value={addressData.country} onChange = {onAddressChange} >
                        {countryOptions}
                        </select>
                    </div>          
                    <div className="form-group">
                        <input type='submit' value='Submit' />  
                    </div>         
                </form>
                {formSubmitted && <Loading />}
                {formProcessed && <Navigate to='/organisations' /> }
            </div>
        </div>
    )
}

export default OrganisationNew;