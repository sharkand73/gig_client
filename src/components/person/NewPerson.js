import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Request from  '../../helpers/request';

const NewPerson = ({organisations}) => {

    //console.log(organisations);

    const [person, setPerson] = useState(null);
    const [addressId, setAddressId] = useState(0);
    const [detailsId, setDetailsId] = useState(0);
    const {register, handleSubmit} = useForm();


    useEffect(() => {
        if (person) {processAddress()}
    }, [person]);

    useEffect(() => {
        if (addressId){processDetails()}
    }, [addressId]);

    useEffect(() => {
        if(detailsId) {processPerson()}
    }, [detailsId]);

    
    const postAddress = (address) => {
        const request = new Request();
        request.post('/addresses', address)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setAddressId(data.id);
            //setKnowHows([...knowHows, data])
        })
      }
    
        const postDetails = (details) => {
          const request = new Request();
          request.post('/details', details)
          .then(res => res.json())
          .then((data) => {
              console.log('data back from db', data);
              setDetailsId(data.id);
              //setKnowHows([...knowHows, data])
          })
        }
    
        const postPerson = (person) => {
          const request = new Request();
          request.post('/persons', person)
          .then(res => res.json())
          .then((data) => {
              console.log('data back from db', data);
              //setKnowHows([...knowHows, data])
          })
        }

    const onSubmit = (data) => {
        data.organisation.id = parseInt(data.organisation.id);
        setPerson(data);
        //console.log(JSON.stringify(data));
        console.log("Person", person);    
    }

    const processAddress = () => {
        const address = {
            addressLine1: person.addressLine1,
            addressLine2: person.addressLine2,
            city: person.city,
            region: person.region,
            postcode: person.postcode,
            country: person.country
        };
        postAddress(address);
        
    }

    const processDetails = () => {
        const details = {
            address: {id: addressId},
            mobile: person.mobile,
            altPhone: person.altPhone,
            email: person.email,
            altEmail: person.altEmail
        };
        postDetails(details);
        
    }

    const processPerson = () => {
        const newPerson = {
            firstName: person.firstName,
            lastName: person.lastName,
            details: {id: detailsId},
            organisation: (person.organisation.id === -1)? null : person.organisation.id
        };
       postPerson(newPerson); 
       // redirect
    }


    const organisationOptions = organisations.map((org) => (
        <option key={org.id} value={org.id}>
            {org.name}
        </option>
    ));

    return (
       <form onSubmit={handleSubmit(onSubmit)} >
           <label htmlFor='firstName'>First Name</label>
           <input type='text' {...register('firstName')} />
           <label htmlFor='lasttName'>Last Name</label>
           <input type='text' {...register('lastName')} />
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
            <label htmlFor='organisation'>Organisation</label>
            <select {...register('organisation.id')} >
                <option key={-1} value={-1}>None</option>
                {organisationOptions}
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

export default NewPerson;