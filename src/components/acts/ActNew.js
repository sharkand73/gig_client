import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Request from  '../../helpers/request';
import { emptyAct, dressCodeOptions } from '../../helpers/formHelper';

const ActNew = ({ acts, setActs }) => {
    
    const [actData, setActData] = useState(emptyAct);
    const [finalAct, setFinalAct] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        if (finalAct){
            setActs([...acts, finalAct]);
            setFormSubmitted(true);
            }
   }, [finalAct]);

    const postAct = (act) => {
        const request = new Request();
        request.post('/acts', act)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setFinalAct(data);
        })
      }

    const onActChange = (e) => {
        let tempData = {...actData};
        tempData[e.target.name] = e.target.value;
        setActData(tempData);
    }

    const onPrepRequiredChange = (e) => {
        let tempData = {...actData};
        tempData.prepRequired = !actData.prepRequired;
        setActData(tempData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postAct(actData); 
    }

    return (
        <div className = 'form-container'>
            <div>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' value={actData.name} onChange = {onActChange} required />
                    </div>
                    <div>
                        <label htmlFor='defaultDressCode'>Default Dress Code</label>
                        <select name='defaultDressCode' value={actData.defaultDressCode} onChange={onActChange} defaultValue='UNKNOWN' required>
                            {dressCodeOptions}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='prepRequired'>Prep Required</label>
                        <input type='checkbox' name='prepRequired' value={actData.prepRequired} onChange = {onPrepRequiredChange} />
                    </div>
                    <div>
                        <input type='submit' value='Submit' />  
                    </div>         
                </form>
                {formSubmitted && <Navigate to='/acts' /> }
            </div>
        </div>
    )
}

export default ActNew;