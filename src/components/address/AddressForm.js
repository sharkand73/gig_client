import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddressForm = ({postAddress}) => {

    const {register, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        postAddress(data);

    }

    return (
       <form onSubmit={handleSubmit(onSubmit)} >
           <label htmlFor='addressLine1'>Address Line 1</label>
           <input type='text' {...register('addressLine1')} />
           <label htmlFor='addressLine2'>Address Line 2</label>
           <input type='text' {...register('addressLine2')} />
           <label htmlFor='city' >City</label>
           <input type='text' {...register('city')} />
           <label htmlFor='addressLine1'>Region</label>
           <input type='text' {...register('region')} />
           <label htmlFor='postcode'>Postcode</label>
           <input type='text' {...register('postcode')} />
           <label htmlFor='country'>country</label>
           <select {...register('country')} >
               <option value = 'Scotland'>Scotland</option>
               <option value = 'England'>England</option>
               <option value = 'Wales'>Wales</option>
            </select>
            <input type='submit' value='Submit' />           
       </form> 
    )
}

export default AddressForm;