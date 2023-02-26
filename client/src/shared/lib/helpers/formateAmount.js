export const formateAmount = (amount) => {
    const formatedAmount = amount.toFixed(2).replace(".", ",");
    return formatedAmount;
};
