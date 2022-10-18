import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Request from  '../../helpers/request';
import { emptyAddress, countryOptions, venueOptions } from '../../helpers/formHelper';
import Loading from '../Loading';


const VenueEdit = ({ reloads, setReloads, venue }) => {
    
    emptyAddress.country = "Scotland";

    const [addressData, setAddressData] = useState(venue.address);
    const [venueData, setVenueData] = useState(venue);
    const [sendVenue, setSendVenue] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formProcessed, setFormProcessed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (sendVenue){
            postVenue(venueData)
            }
   }, [sendVenue]);

   const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    postAddress(addressData); 
    }

    const postAddress = (address) => {
        const request = new Request();
        request.put(`/addresses/${venue.address.id}`, address)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setVenueData({...venueData, address: {id: data.id}});
            setSendVenue(true);
        })
      }

    const postVenue = (venue) => {
        const request = new Request();
        request.put(`/venues/${venue.id}`, venue)
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

    const onVenueChange = (e) => {
        let tempData = {...venueData};
        tempData[e.target.name] = e.target.value;
        setVenueData(tempData);
    }

    const onVenueTypeChange = (e) => {
        let tempData = {...venueData};
        tempData.venueType = e.target.value ? e.target.value : "";
        setVenueData(tempData);
    }

    const onCoordsChange = (e) => {
        let tempData = {...venueData};
        tempData[e.target.name] = e.target.value ? parseFloat(e.target.value) : "";
        setVenueData(tempData);
    }

    return (
        <div className = 'form-container'>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className='form-group'>
                        <label className="label" htmlFor='name'>Name</label>
                        <input type='text' name='name' value={venueData.name} onChange = {onVenueChange} required />
                    </div>
                    <div className='form-group'>
                        <label className="label" htmlFor='venueType'>Type</label>
                        <select name='venueType' onChange={onVenueTypeChange} value={venueData.venueType} required>
                            {venueOptions}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className="label" htmlFor='addressLine1'>Address Line 1</label>
                        <input type='text' name='addressLine1' value={addressData.addressLine1} onChange = {onAddressChange} />
                    </div>
                    <div className='form-group'>
                        <label className="label" htmlFor='addressLine2'>Address Line 2</label>
                        <input type='text' name='addressLine2' value={addressData.addressLine2} onChange = {onAddressChange} />
                    </div>
                    <div className='form-group'>
                        <label className="label" htmlFor='city' >City</label>
                        <input type='text' name='city' value={addressData.city} onChange = {onAddressChange} />
                    </div>
                    <div className='form-group'>
                        <label className="label" htmlFor='region'>Region</label>
                        <input type='text' name='region' value={addressData.region} onChange = {onAddressChange}/>
                    </div>
                    <div className='form-group'>
                        <label className="label" htmlFor='postcode'>Postcode</label>
                        <input type='text' name='postcode' value={addressData.postcode} onChange = {onAddressChange} />
                    </div>
                    <div className='form-group'>
                        <label className="label" htmlFor='country'>Country</label>
                        <select name='country' value={addressData.country} onChange = {onAddressChange} >
                        {countryOptions}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className="label" htmlFor='coordinatesE'>Coordinates</label>
                        <input type='number' className="coords" name='coordinatesE' value={venueData.coordinatesE} onChange = {onCoordsChange} />&#176;E
                    </div>
                    <div className='form-group'>
                        <label className="label" htmlFor='coordinatesN'></label>
                        <input type='number' className="coords" name='coordinatesN' value={venueData.coordinatesN} onChange = {onCoordsChange} />&#176;N
                    </div>
          
                    <div>
                        <input type='submit' value='Save' /> 
                        <button onClick={() => navigate(`/venues`)}>Cancel</button>  
                    </div>         
                </form>
                {formSubmitted && <Loading />}
                {formProcessed && <Navigate to='/venues' /> }
            </div>
        </div>
    )
}

export default VenueEdit;