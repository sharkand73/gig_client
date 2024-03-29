export const createGigObject = (gigs) => (
        gigs.reduce((acc, gig) => {
            let year = gig.startTime.slice(0,4);
            return {...acc, [year]: [...(acc[year]||[]), gig]}
      }, {})
);

export const processFee = (fee) => {
    return fee === 0 ? "FREE" : "£"+fee.toFixed(2) ;
}

export const processGigClass = (gig, nextGig, useNextGig) => {
    if (!gig || !nextGig) return 'ticket normal-gig';
    return (useNextGig && gig.id === nextGig.id ? 'ticket next-gig' : 'ticket normal-gig')
}

export const reverseGigObject = (gigObj) => {
    Object.keys(gigObj).forEach(year => {
        gigObj[year].reverse();
    });
} 

export const isCancelled = (gig) => gig.booking.status === 'CANCELLED';

export const getInitialViewState = () => {
    const defaultView = {reverseChronology: false,
        showPastGigs: false,
        showCancelledGigs: false};
    const storedView = JSON.parse(localStorage.getItem("gigView"));
    return storedView ? storedView : defaultView;
}
