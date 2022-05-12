import React from 'react';
import { Link } from 'react-router-dom';
import { sortObjectsAlphabetically } from '../../helpers/functions';

const OrganisationList = ({ organisations }) => {

  const sortedOrganisations = sortObjectsAlphabetically(organisations, 'name');

  let organisationRows = {};
  if (organisations){
  organisationRows = sortedOrganisations.map((org, index) => {
    
    return (
        <Link to={org.id.toString()} key={index} className="tr">            
          <div className="td">{org.name}</div>
        </Link>
    );
  })};

  return (
    <div className="organisation-list list">
      
      <h1>Organisations</h1> 
      <div className="table">      
        {organisationRows}       
      </div>     
    </div>
  )};


export default OrganisationList;
