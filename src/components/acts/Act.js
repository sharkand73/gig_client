import React from 'react';
import { useParams } from 'react-router-dom';
import { findById } from '../../helpers/functions';
import { convertEnumToString } from '../../helpers/enumHelper';
import Back from '../buttons/Back';

import Error from '../Error';


const Act = ({ acts }) => {

    const id  = parseInt(useParams().id);
    const act = findById(acts, id);
   
    if (!act){
      return (
        <Error entity = {"act"} />
      )
    };

    return (
      <div className = "table">
        <div className = "tr">
          <div className = "td">Name:</div><div className = "td">{act.name}</div>
        </div>
        <div className = "tr">
          <div className = "td">Styles:</div><div className = "td"></div>
        </div>
        <div className = "tr">
          <div className = "td">Skills Required:</div><div className = "td"></div>
        </div>
        <div className = "tr">
          <div className = "td">Prep Required:</div><div className = "td">{act.prepRequired ? 'Yes' : 'No'}</div>
        </div>
        <div className = "tr">
          <div className = "td">Usual Dress Code:</div><div className = "td">{convertEnumToString(act.defaultDressCode)}</div>
        </div>
        <Back />
      </div>
    );
};

export default Act;

