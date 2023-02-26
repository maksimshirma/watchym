export const convertDateToNumber = (date) => {
    const [year, month, day] = date.split("-");
    const convertedDate = new Date(year, Number(month) - 1, day).getTime();
    return convertedDate;
};
