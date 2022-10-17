import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { dressCodeOptions } from '../../helpers/formHelper';
import Request from  '../../helpers/request';
import Loading from '../Loading';
import ActStyles from './ActStyles';
import ActSkills from './ActSkills';


const ActEdit = ({ reloads, setReloads, act, skills, styles }) => {
    
    const [showStyles, setShowStyles] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [actData, setActData] = useState(act);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formProcessed, setFormProcessed] = useState(false);
    const navigate = useNavigate();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        // Couldn't find the source of the erratic behaviour
        // so the following line is to stop it
        if (showSkills || showStyles) {
            return;
        }
        setFormSubmitted(true);
        postAct(actData); 
    }

    const postAct = (act) => {
        const request = new Request();
        request.put(`/acts/${act.id}`, act)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data);
            setFormProcessed(true);
            setReloads(reloads + 1);
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

    const onShowStyles = () => {
        setShowSkills(false);
        setShowStyles(true);
    }

    const onShowSkills = () => {
        setShowStyles(false);
        setShowSkills(true);
    }

    const onClose = () => {
        setShowStyles(false);
        setShowSkills(false);
    }

    return (
        <>
        <div className = 'form-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label" htmlFor='name'>Name</label>
                    <input type='text' name='name' value={actData.name} onChange = {onActChange} required />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor='defaultDressCode'>Default Dress Code</label>
                    <select name='defaultDressCode' value={actData.defaultDressCode} onChange={onActChange} required>
                        {dressCodeOptions}
                    </select>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor='prepRequired'>Prep Required</label>
                    <input type='checkbox' name='prepRequired' value={actData.prepRequired} onChange = {onPrepRequiredChange} />
                </div>
                <div className="form-group">
                    <label className='label' htmlFor='styles'>Styles</label>
                    <span>({actData.styles.length})&nbsp;&nbsp;</span>
                    <button onClick={()=>onShowStyles()}>Select Styles</button>
                </div>
                <div className="form-group">
                    <label className='label' htmlFor='skills'>Skills</label>
                    <span>({actData.skillsRequired.length})&nbsp;&nbsp;</span>
                    <button onClick={()=>onShowSkills()}>Select Skills</button>
                </div>
                { showStyles && <ActStyles actData={actData} styles={styles} setActData={setActData} onClose={onClose} />}
                { showSkills && <ActSkills actData={actData} skills={skills} setActData={setActData} onClose={onClose} />}                
                <div className="form-group">
                    <input type='submit' value='Save' disabled={showSkills || showStyles}/>  
                    <button onClick={() => navigate(`/acts/${act.id}`)}>Cancel</button>
                </div>         
            </form>
            { formSubmitted && <Loading />}
            { formProcessed && <Navigate to='/acts' /> }
        </div>
    </>
    )
}

export default ActEdit;