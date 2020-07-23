export const getCurrentDate = () => {
    let today = new Date();

    let dd = today.getDate();

    let mm = today.getMonth()+1;

    let yyyy = today.getFullYear();

    if(dd<10){dd='0'+dd}
    if(mm<10){mm='0'+mm}

    let td = yyyy+'-'+mm+'-'+dd;

    return td;
}

export const isDifferentDates = (d1, d2) => {
    return d2 - d1 !== 0;
}
