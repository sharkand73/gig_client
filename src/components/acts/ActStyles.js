import React from "react";
import { convertEnumToString } from "../../helpers/enumHelper";
import { findById } from "../../helpers/functions";

const ActStyles = ({ onClose, styles, actData, setActData }) => {

    const isChecked = (style) => {
        return actData.styles.map(s => s.id).includes(style.id);
    }

    const onChange = (e) => {
        let style = findById(styles, e.target.value);
        let actStyles = actData.styles;
        let idList = actStyles.map(s => s.id);
        if (!idList.includes(style.id)){
            actStyles.push(style);
            setActData({...actData, styles: actStyles});
            return;
        }
        let i = idList.indexOf(style.id);
        actStyles.splice(i, 1);
        setActData({...actData, styles: actStyles});
    }

    const styleNameControls = styles.map((style, i) =>{        
        return (
            <div key={i}>
                <label className='label stylesskills'>{i===0? "Styles" : null}</label>
                <input type="checkbox" name={style.name} value={style.id} checked={isChecked(style)} onChange={onChange}/>
                <label className='checkbox-label'>{convertEnumToString(style.name)}</label>
            </div>
        )
    });
    return (
        <div className="selector">
            <div>
                {styleNameControls}
            </div>
            <div>
                <button onClick={()=>onClose()}>Close</button>
            </div>
        </div>
    )
}

export default ActStyles;