import React from 'react';
import { useParams } from 'react-router-dom';
import { findById } from '../../helpers/functions';
import Error from '../Error';
import ActEdit from './ActEdit';

const ActEditHome = ({ reloads, setReloads, acts, skills, styles }) => {
    
    const id  = parseInt(useParams().id);
    const act = findById(acts, id);
   
    if (!act){
      return (
        <Error entity = {"act"} />
      )
    };

    return (
        <ActEdit act={act} skills={skills} styles={styles} reloads={reloads} setReloads={setReloads} />
    )
}

export default ActEditHome;