import React from 'react';

const GigNav = ({setGigsPage}) => {

    return (
      <div>
        <div onClick = {() => setGigsPage('next')}>Next</div>
        <div onClick = {() => setGigsPage('future')}>Coming Up</div>
        <div onClick = {() => setGigsPage('past')}>Past</div>
        <div onClick = {() => setGigsPage('open')}>Open</div>
        <div onClick = {() => setGigsPage('closed')}>Closed</div>
      </div>
    );
};

export default GigNav;

