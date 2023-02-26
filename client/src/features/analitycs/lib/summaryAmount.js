export const summaryAmount = (operations) => {
    return operations ? operations.reduce((acc, operation) => acc + operation.amount, 0) : null;
};
