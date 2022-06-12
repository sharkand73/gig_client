import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Request from  '../../helpers/request';
import { emptyAct, dressCodeOptions } from '../../helpers/formHelper';
import Loading from '../Loading';

const ActNew = ({ acts, setActs, reloads, setReloads }) => {
    
    const [actData, setActData] = useState(emptyAct);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formProcessed, setFormProcessed] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    postAct(actData); 
}

    const postAct = (act) => {
        const request = new Request();
        request.post('/acts', act)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setFormProcessed(true);
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
                        <select name='defaultDressCode' value={actData.defaultDressCode} onChange={onActChange} required>
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
                {formSubmitted && <Loading />}
                {formProcessed && <Navigate to='/acts' /> }
            </div>
        </div>
    )
}

export default ActNew;