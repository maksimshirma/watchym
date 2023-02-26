export const filterOperationsByDate = (operations, startDate, endDate) => {
    return operations.filter((operation) => operation.date >= startDate && operation.date < endDate);
};
