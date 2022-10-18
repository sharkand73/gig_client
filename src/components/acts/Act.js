import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { dateTimeStringToShortDate, findById, sortObjectsChronologically } from '../../helpers/functions';
import { convertEnumToString } from '../../helpers/enumHelper';
import Back from '../buttons/Back';
import Edit from '../buttons/Edit';
import Error from '../Error';


const Act = ({ acts, gigs }) => {

    const navigate = useNavigate();
    const id  = parseInt(useParams().id);
    const act = findById(acts, id);
   
    if (!act){
      return (
        <Error entity = {"act"} />
      )
    };

    const now = new Date();
    const actGigs = sortObjectsChronologically(act.gigs, 'startTime', false);
    const pastActGigs = actGigs.filter((item) => new Date(item.startTime) <= now);
    const gigExists = pastActGigs.length > 0;
    const getSkills = () => {
      let skillsList = act.skillsRequired.map(s => convertEnumToString(s.name));
      return skillsList.join(', ');
    }
    const getStyles = () => {
      let stylesList = act.styles.map(s => convertEnumToString(s.name));
      return stylesList.join(', ');
    }

    return (
      <div className = "table mtop">
        <Link to={`/acts/edit/${act.id}`}>       
          <Edit />
        </Link>
        <div className = "tr">
          <div className = "td">Name:</div><div className = "td">{act.name}</div>
        </div>
        <div className = "tr">
          <div className = "td">Styles:</div>
          <div className = "td">{getStyles()}</div>
        </div>
        <div className = "tr">
          <div className = "td">Skills Required:</div>
          <div className = "td">{getSkills()}</div>
        </div>
        <div className = "tr">
          <div className = "td">Prep Required:</div><div className = "td">{act.prepRequired ? 'Yes' : 'No'}</div>
        </div>
        <div className = "tr">
          <div className = "td">Usual Dress Code:</div><div className = "td">{convertEnumToString(act.defaultDressCode)}</div>
        </div>
        {gigExists && <div className = "tr">
          <div className = "td">Last Played With:</div>
          <div className = "td">{dateTimeStringToShortDate(pastActGigs[0].startTime)}</div>
        </div>}
        <div>   
          <Back />
        </div>
      </div>
    );
};

export default Act;

