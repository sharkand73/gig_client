import React from 'react';
import { Link } from 'react-router-dom';
import { sortObjectsAlphabetically } from '../../helpers/functions';

const ActList = ({ acts }) => {

  const sortedActs = sortObjectsAlphabetically(acts, 'name'); 
  let actRows = {};
  if (acts){
  actRows = sortedActs.map((act, index) => {
    
    return (
        <Link to={act.id.toString()} key={index} className="tr">  
          <div className="td">{act.name}</div>          
        </Link>
    );
  })};

  return (
    <div className="act-list list">
      
      <h1>Acts</h1> 
      <div className="table">  
        <div className="tr">
          <div className="td">Name</div> 
        </div>    
        {actRows}       
      </div>     
    </div>
  )};


export default ActList;
