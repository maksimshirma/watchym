import { convertDateToString } from "../../../shared";

export const convertDate = (date) => {
    const newDate = convertDateToString(date);
    return newDate.split("-").slice(1, 3).reverse().join(".");
};
