export const getFractionalPart = (amount) => {
    const splitedAmount = amount.split("");
    const indexOfComma = splitedAmount.indexOf(",");
    return splitedAmount.slice(indexOfComma, splitedAmount.length).join("");
};
