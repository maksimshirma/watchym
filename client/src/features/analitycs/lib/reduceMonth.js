export const reduceMonth = (date) => {
    const newDate = new Date(date);
    const month = Number(newDate.getMonth());
    if (month === 0) {
        const year = Number(newDate.getFullYear());
        newDate.setFullYear(year - 1);
    }
    newDate.setMonth((month + 11) % 12);
    return newDate.getTime();
};
