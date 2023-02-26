export const getAllMoney = (accounts) => {
    const allMoney = accounts.reduce((acc, account) => account.amount + acc, 0);
    return allMoney;
};
