export const getIntegerPart = (amount) => {
    const splitedAmount = amount.split("");
    const indexOfComma = splitedAmount.indexOf(",");
    return splitedAmount.slice(0, indexOfComma).join("");
};
