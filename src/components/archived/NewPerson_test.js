import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Request from  '../../helpers/request';

const NewPerson_test = ({organisations}) => {

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log('Submit!');
    }

    const organisationOptions = organisations.map((org) => (
        <option key={org.id} value={org.id}>
            {org.name}
        </option>
    ));

    return (
       <form onSubmit={onSubmit} >
            <div>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' disabled />
                <label htmlFor='lasttName'>Last Name</label>
                <input type='text'  />
            </div>
            <div>
                <label htmlFor='addressLine1'>Address Line 1</label>
                <input type='text'  />
            </div>
            <div>
                <label htmlFor='addressLine2'>Address Line 2</label>
                <input type='text'  />
            </div>
            <div>
                <label htmlFor='city' >City</label>
                <input type='text' />
            </div>
            <div>
                <label htmlFor='Region'>Region</label>
                <input type='text' />
            </div>
            <div>
                <label htmlFor='postcode'>Postcode</label>
                <input type='text' />
            </div>
            <div>
                <label htmlFor='country'>Country</label>
                <select>
                    <option value = 'Scotland'>Scotland</option>
                    <option value = 'England'>England</option>
                    <option value = 'Wales'>Wales</option>
                </select>
            </div>
            <div>
                <label htmlFor='organisation'>Organisation</label>
                <select  >
                    <option key={-1} value={-1}>None</option>
                    {organisationOptions}
                </select>
            </div>
            <div>
                <label htmlFor='mobile'>Mobile</label>
                <input type='text'  />
            </div>
            <div>
                <label htmlFor='altPhone' >Alt. Phone</label>
                <input type='text'  />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text'  />
            </div>
            <div>
                <label htmlFor='altEmail'>Alt. Email</label>
                <input type='text' />
            </div>
            <div>
                <input type='submit' value='Submit' disabled={true}/>  
            </div>         
       </form> 
    )
}

export default NewPerson_test;