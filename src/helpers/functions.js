import Moment from 'react-moment';

export const dateTimeStringToDate = (dateTimeString) => {
    const dateTimeObject = new Date(dateTimeString);
    return (
      <Moment format="dddd Do MMMM YYYY">{dateTimeObject}</Moment>
      //<Moment format="DD/MM/YYYY">{dateTimeObject}</Moment>
    );
};

export const dateTimeStringToTime = (dateTimeString) => {
    const dateTimeObject = new Date(dateTimeString);
    return (
      <Moment format="HH:mm">{dateTimeObject}</Moment>
    );
};

export const dateTimeStringToShortDate = (dateTimeString) => {
  const dateTimeObject = new Date(dateTimeString);
  return (
    <Moment format="DD/MM/YYYY">{dateTimeObject}</Moment>
    //<Moment format="DD/MM/YYYY">{dateTimeObject}</Moment>
  );
};

export const findById = (objList, id) => {
    return objList.find((item) => item.id === id);
  }

export const sortObjectsAlphabetically = (objList, property) => {
  if (!objList || objList.length <= 1){
    return objList
  }
  let tempList = [...objList];
  tempList.sort((a, b) => {
    let aComparison = a[property];
    let bComparison = b[property];
    if (a[property].length > 3 && a[property].substr(0,4) === "The ") {
      aComparison = a[property].slice(4);
    }
    if (b[property].length > 3 && b[property].substr(0,4) === "The ") {
      bComparison = b[property].slice(4);
    }
    return (aComparison < bComparison? -1 : 1)
  });
  return tempList;
};


export const sortObjectsChronologically = (objList, property, asc) => {
  if (!objList || objList.length <= 1){
    return objList
  }
  const multiplier = ((asc & 1) * 2) - 1;
  let tempList = [...objList];
  tempList.sort((a, b) => ((new Date(a[property]) - new Date(b[property])) * multiplier )
  );
  return tempList;
}

export const objectsAreEqual = (object1, object2) => (JSON.stringify(object1) === JSON.stringify(object2));

export const addDay = (dateString) => {
  const givenDate = new Date(dateString);
  givenDate.setDate(givenDate.getDate() + 1);  
  return givenDate.toISOString().slice(0,10);
}