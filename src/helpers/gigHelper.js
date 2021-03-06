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
    return (useNextGig && gig.id === nextGig.id ? 'ticket next-gig' : 'ticket normal-gig')
}

export const reverseGigObject = (gigObj) => {
    Object.keys(gigObj).forEach(year => {
        gigObj[year].reverse();
    });
} 


