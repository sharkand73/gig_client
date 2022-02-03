import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const NewDetails = ({postDetails, addresses}) => {

    const {register, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        data.address.id = parseInt(data.address.id);
        console.log(JSON.stringify(data));
        postDetails(data);
    }

    // const getAddressObject= (addressId) => {
    //     const newObj = {id: addressId}
    //     return newObj
    // };

    // Need to investigate this further as I am at impasse with whether to send the address object or the address id to data.

    const addressOptions = addresses.filter(address => !address.venue && !address.details)
    .map((address) => (
        <option key={address.id} value={address.id}>
            {address.addressLine1} {address.city}
        </option>
    ));

    return (
       <form onSubmit={handleSubmit(onSubmit)} >
           <label htmlFor='address'>Address</label>
           <select {...register('address.id')}>
                {addressOptions}
           </select>
           <label htmlFor='mobile'>Mobile</label>
           <input type='text' {...register('mobile')} />
           <label htmlFor='altPhone' >Alt. Phone</label>
           <input type='text' {...register('altPhone')} />
           <label htmlFor='email'>Email</label>
           <input type='text' {...register('email')} />
           <label htmlFor='postcode'>Alt. Email</label>
           <input type='text' {...register('altEmail')} />
            <input type='submit' value='Submit' />           
       </form> 
    )
}

export default NewDetails;