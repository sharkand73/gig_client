import React from "react";
import { styleNames, convertEnumToString } from "../../helpers/enumHelper";

const ActStyles = ({ onClose, actData, setActData }) => {

    const isChecked = (style) => {
        return actData.styles.includes(style);
    }

    const onChange = (e) => {
        let style = e.target.value;
        let styles = actData.styles;
        console.log(style);
        if (!styles.includes(style)){
            styles.push(style);
            setActData({...actData, styles: styles});
            return;
        }
        let i = styles.indexOf(style);
        styles.splice(i, 1);
        setActData({...actData, styles: styles});
    }

    const styleNameControls = styleNames.map((styleName, i) =>{
        return (
            <div key={i}>
                <label className='label stylesskills'>{i===0? "Styles" : null}</label>
                <input type="checkbox" name={styleName} value={styleName} checked={isChecked(styleName)} onChange={onChange}/>
                <label className='checkbox-label'>{convertEnumToString(styleName)}</label>
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