import React from 'react';

export const GigViewSettings = ({ view, setView }) => {

    const onClick = (e) => {
        let temp = {...view};
        temp[e.target.name] = !temp[e.target.name];
        setView(temp);
    }

  return (
    /* <div>{">"}</div> */
    <form className='gig-view-form'>
        <div className='view-options'>
            <label htmlFor='reverseChronology'>Reverse Chronology</label>
            <input type='checkbox' name='reverseChronology' checked={view.reverseChronology} onChange={onClick} />
        </div>
        <div className='view-options'>
            <label htmlFor='showPastGigs'>Past Gigs</label>
            <input type='checkbox' name='showPastGigs' checked={view.showPastGigs} onChange={onClick} />
        </div>
        <div className='view-options'>
            <label htmlFor='showCancelledGigs'>Cancelled Gigs</label>
            <input type='checkbox' name='showCancelledGigs' checked={view.showCancelledGigs} onChange={onClick} />
        </div>
    </form>
  )
}
