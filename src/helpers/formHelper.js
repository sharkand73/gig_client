import { countries, convertEnumToString, venueTypes} from "./enumHelper";

export const emptyAddress = {
    addressLine1: "",
    addressLine2: "",
    city: "",
    region: "",
    postcode: "",
    country: "", 
    id: null
};

export const emptyDetails = {
    address: null,
    mobile: "",
    altPhone: "",
    email: "",
    altEmail: "",
    id: null
};

export const emptyPerson = {
    firstName: "",
    lastName: "",
    details: null,
    organisation: null,
    id: null
};

export const emptyVenue = {
    name: "",
    venueType: "",
    address: null,
    coordinatesE: "",
    coordinatesN: "",
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

