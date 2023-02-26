export const convertDateToString = (date) => {
    const newDate = new Date(date);
    let year = newDate.getFullYear();
    let day = newDate.getDate();
    let month = newDate.getMonth();
    if (month + 1 >= 1 && month + 1 <= 9) {
        month = `0${(month + 1) % 12}`;
    }
    if (day >= 1 && day <= 9) {
        day = `0${day}`;
    }
    return [year, month, day].join("-");
};
