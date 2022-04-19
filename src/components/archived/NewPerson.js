import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Request from  '../../helpers/request';

const NewPerson = ({organisations, currentPerson}) => {

    //console.log(organisations);
    
    const [editing, setEditing] = useState(false);
    const [person, setPerson] = useState(currentPerson);
    const [addressId, setAddressId] = useState(0);
    const [detailsId, setDetailsId] = useState(0);
    const {register, handleSubmit} = useForm();


    useEffect(() => {
        if (addressId) {processAddress()}
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
            organisation: (person.organisation.id)? person.organisation.id : null
        };
       postPerson(newPerson); 
       // redirect
    }

    const organisationOptions = organisations.map((org) => (
        <option key={org.id} value={org.id}>
            {org.name}
        </option>
    ));

    const toggleEdit = () => {
        setEditing(!editing);
    }

    const getFormButtonClass = (status) => {
        if (status){
            return "form-button disabled"
        }
        else {
            return "form-button enabled"
        }
    }

    return (
        <div className = 'form-container'>
            <div className = 'form-top-line'>                
                <button onClick={toggleEdit} className={`${getFormButtonClass(editing)} edit`}>Edit</button>                                
                <button onClick={toggleEdit} className={`${getFormButtonClass(!editing)} cancel`}>Cancel</button>                
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' {...register('firstName')} required />
                    </div>
                    <div>
                        <label htmlFor='lasttName'>Last Name</label>
                        <input type='text' {...register('lastName')} required />
                    </div>
                    <div>
                        <label htmlFor='addressLine1'>Address Line 1</label>
                        <input type='text' {...register('addressLine1')} />
                    </div>
                    <div>
                        <label htmlFor='addressLine2'>Address Line 2</label>
                        <input type='text' {...register('addressLine2')} />
                    </div>
                    <div>
                        <label htmlFor='city' >City</label>
                        <input type='text' {...register('city')} />
                    </div>
                    <div>
                        <label htmlFor='addressLine1'>Region</label>
                        <input type='text' {...register('region')} />
                    </div>
                    <div>
                        <label htmlFor='postcode'>Postcode</label>
                        <input type='text' {...register('postcode')} />
                    </div>
                    <div>
                        <label htmlFor='country'>Country</label>
                        <select {...register('country')} >
                        <option value = 'Scotland'>Scotland</option>
                        <option value = 'England'>England</option>
                        <option value = 'Wales'>Wales</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='organisation'>Organisation</label>
                        <select {...register('organisation.id')} >
                            <option key={0} value={0}>None</option>
                            {organisationOptions}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='mobile'>Mobile</label>
                        <input type='text' {...register('mobile')} />
                    </div>
                    <div>
                        <label htmlFor='altPhone' >Alt. Phone</label>
                        <input type='text' {...register('altPhone')} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text' {...register('email')} />
                    </div>
                    <div>
                        <label htmlFor='postcode'>Alt. Email</label>
                        <input type='text' {...register('altEmail')} />
                    </div>
                    <div>
                        <input type='submit' value='Submit' />  
                    </div>         
                </form> 
            </div>
        </div>
    )
}

export default NewPerson;