import Moment from 'react-moment';

export const dateTimeStringToDate = (dateTimeString) => {
    const dateTimeObject = new Date(dateTimeString);
    return (
      <Moment format="DD/MM/YYYY">{dateTimeObject}</Moment>
    );
};

export const dateTimeStringToTime = (dateTimeString) => {
    const dateTimeObject = new Date(dateTimeString);
    return (
      <Moment format="HH:mm">{dateTimeObject}</Moment>
    );
};

export const findById = (objList, id) => {
    return objList.find((item) => item.id === id);
  }