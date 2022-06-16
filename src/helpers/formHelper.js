import { countries, convertEnumToString, venueTypes, dressCodes, paymentMethods } from "./enumHelper";

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

export const emptyOrganisation = {
    name: '',
    address: null,
    id: null
};

export const emptyAct = {
    name: '',
    prepRequired: false,
    defaultDressCode: "UNKNOWN",
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

export const paymentOptions = paymentMethods.map((method, index) => (
            <option key={index} value={method}>
                {convertEnumToString(method)}
            </option>
))
 
export const messageOptions = null;
       

 