export const addMonth = (date) => {
    const newDate = new Date(date);
    const month = Number(newDate.getMonth());
    if (month === 11) {
        const year = Number(newDate.getFullYear());
        newDate.setFullYear(year + 1);
    }
    newDate.setMonth((month + 1) % 12);
    return newDate.getTime();
};
