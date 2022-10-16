import React from "react";
import { skillNames, convertEnumToString } from "../../helpers/enumHelper";

const ActSkills = ({ onClose, actData, setActData }) => {

    const isChecked = (skill) => {
        return actData.skillsRequired.includes(skill);
    }

    const onChange = (e) => {
        let skill = e.target.value;
        let skillsRequired = actData.skillsRequired;
        console.log(skill);
        if (!skillsRequired.includes(skill)){
            skillsRequired.push(skill);
            setActData({...actData, skillsRequired: skillsRequired});
            return;
        }
        let i = skillsRequired.indexOf(skill);
        skillsRequired.splice(i, 1);
        setActData({...actData, skillsRequired: skillsRequired});
    }

    const skillNameControls = skillNames.map((skillName, i) =>{
        return (
            <div key={i}>
                <label className='label stylesskills'>{i===0? "Skills" : null}</label>
                <input type="checkbox" name={skillName} value={skillName} checked={isChecked(skillName)} onChange={onChange}/>
                <label className='checkbox-label'>{convertEnumToString(skillName)}</label>
            </div>
        )
    });
    return (
        <div className="selector">
            <div>
                {skillNameControls}
            </div>
            <div>
                <button onClick={()=>onClose()}>Close</button>
            </div>
        </div>
    )
}

export default ActSkills;