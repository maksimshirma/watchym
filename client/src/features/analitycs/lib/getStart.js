export const getStart = () => {
    const start = new Date();
    start.setDate(1);
    start.setHours(0);
    start.setMinutes(0);
    start.setMilliseconds(0);
    return start.getTime();
};
