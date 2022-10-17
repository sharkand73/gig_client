import React from "react";
import { convertEnumToString } from "../../helpers/enumHelper";
import { findById } from "../../helpers/functions";

const ActSkills = ({ onClose, skills, actData, setActData }) => {

    const isChecked = (skill) => {
        return actData.skillsRequired.map(s => s.id).includes(skill.id);
    }

    const onChange = (e) => {
        let skill = findById(skills, e.target.value);
        let skillsRequired = actData.skillsRequired;
        let idList = skillsRequired.map(s => s.id);
        if (!idList.includes(skill.id)){
            skillsRequired.push(skill);
            setActData({...actData, skillsRequired: skillsRequired});
            return;
        }
        let i = idList.indexOf(skill.id);
        skillsRequired.splice(i, 1);
        setActData({...actData, skillsRequired: skillsRequired});
    }

    const skillNameControls = skills.map((skill, i) =>{
        return (
            <div key={i}>
                <label className='label stylesskills'>{i===0? "Skills" : null}</label>
                <input type="checkbox" name={skill.name} value={skill.id} checked={isChecked(skill)} onChange={onChange}/>
                <label className='checkbox-label'>{convertEnumToString(skill.name)}</label>
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