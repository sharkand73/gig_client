import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Request from  '../../helpers/request';
import { emptyAddress, emptyVenue, countryOptions, venueOptions } from '../../helpers/formHelper';



const VenueNew = ({venues, setVenues, addresses, setAddresses }) => {
    
    emptyAddress.country = "Scotland";

    const [addressData, setAddressData] = useState(emptyAddress);
    const [venueData, setVenueData] = useState(emptyVenue);
    const [sendVenue, setSendVenue] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);


    useEffect(() => {
        if (sendVenue){
            postVenue(venueData)
            }
   }, [sendVenue]);


   useEffect(() => {
    console.log(venueData) 
    }, []);

    
   const setEmptyCoordsToNull = () => {
        let tempData = [...venueData];
        if (tempData.coordinatesE === "") {
           tempData.coordinatesE = null;
        }
        if (tempData.coordinatesN === "") {
            tempData.coordinatesN = null;
        }
        setVenueData(tempData);
   }

    const postAddress = (address) => {
        const request = new Request();
        request.post('/addresses', address)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setVenueData({...venueData, address: {id: data.id}});
            setSendVenue(true);
            setAddresses([...addresses, data])
        })
      }

    const postVenue = (venue) => {
        setEmptyCoordsToNull();
        const request = new Request();
        request.post('/venue', venue)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setFormSubmitted(true);
            setVenues([...venues, data])
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(venueData);
        console.log(addressData);
        //postAddress(addressData); 
    }

    return (
        <div className = 'form-container'>
            <div>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' value={venueData.name} onChange = {onVenueChange} required />
                    </div>
                    <div>
                        <label htmlFor='venueType'>Type</label>
                        <select name='venueType' onChange={onVenueTypeChange} defaultValue='' required>
                            <option disabled value=''>Select Venue Type</option>
                            {venueOptions}
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
                        <input type='number' name='coordinatesE' value={venueData.coordinatesE} onChange = {onCoordsChange} />&#176;E
                        <input type='number' name='coordinatesN' value={venueData.coordinatesN} onChange = {onCoordsChange} />&#176;N
                    </div>
          
                    <div>
                        <input type='submit' value='Submit' />  
                    </div>         
                </form>
                {formSubmitted && <Navigate to='/venues' /> }
            </div>
        </div>
    )
}

export default VenueNew;