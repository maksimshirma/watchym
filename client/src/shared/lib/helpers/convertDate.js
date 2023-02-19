export const convertDate = (date) => {
    const [year, month, day] = date.split("-");
    const convertedDate = new Date(year, month, day).getTime();
    return convertedDate;
};
