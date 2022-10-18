import { countries, convertEnumToString, venueTypes, dressCodes, gigTypes, paymentMethods, bookingStatuses } from "./enumHelper";

export const homeCountry = 'Scotland';

export const emptyAddress = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    region: '',
    postcode: '',
    country: homeCountry, 
    id: null
};

export const emptyDetails = {
    address: null,
    mobile: '',
    altPhone: '',
    email: '',
    altEmail: '',
    id: null
};

export const emptyPerson = {
    firstName: '',
    lastName: '',
    details: null,
    organisation: null,
    id: null
};

export const emptyVenue = {
    name: '',
    venueType: '',
    address: null,
    coordinatesE: '',
    coordinatesN: '',
    id: null
};

export const parseVenue = (venue) => {
    return {
        name: venue.name,
        venueType: venue.venueType,
        address: venue.address,
        coordinatesE: venue.coordinatesE,
        coordinatesN: venue.coordinatesN,
        id: venue.id
    }
}

export const emptyOrganisation = {
    name: '',
    address: null,
    id: null
};

export const emptyAct = {
    name: '',
    prepRequired: false,
    defaultDressCode: "UNKNOWN",
    styles: [],
    skillsRequired: [],
    id: null
};

export const emptyMessage = {
    date: '',
    bookingGroup: {id: -1},
    bookingMethod: 'SMS',
    body: '',
    id: null
};

export const emptyGroup = {
    booker: null,
    bookingDate: '',
    bookingCode: '',
    feePaymentMethod: 'BACS',
    expensesPaymentMethod: 'BACS',
    archived: false,
    id: null
};

export const emptyGig = {
    booking: null,
    venue: null,
    act: null,
    arrivalTime: "",
    startTime: "",
    endTime: "",
    playingTime: 60,
    gigType: "WEDDING",
    dressCode: "UNKNOWN",
    soundCheck: false,
    foodProvided: false,
    distanceDriven: 0,
    moneySpent: 0,
    id: null
};

export const emptyBooking = {
    bookingGroup: null,
    fee: 150,
    status: "CONFIRMED",
    dateConfirmed: "",
    dateCancelled: "",
    dateFeePaid: "",
    dateExpensesPaid: "",
    id: null
}

export const refObject = (id) => ({
    id: id
});


export const countryOptions = countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
        )
        );

export const venueOptions = venueTypes.map((venueType, index) => (
            <option key={index} value={venueType}>
                {convertEnumToString(venueType)}
            </option>
        ));

export const dressCodeOptions = dressCodes.map((dressCode, index) => (
            <option key={index} value={dressCode}>
                {convertEnumToString(dressCode)}
            </option>
        ));

export const gigTypeOptions = gigTypes.map((gigType, index) => (
            <option key={index} value={gigType}>
                {convertEnumToString(gigType)}
            </option>
        ));

export const paymentOptions = paymentMethods.map((method, index) => (
            <option key={index} value={method}>
                {convertEnumToString(method)}
            </option>
        ));
 
export const statusOptions = bookingStatuses.map((status, index) => (
            <option key={index} value={status}>
                {convertEnumToString(status)}
            </option>
        ));
export const messageOptions = null;
       

 