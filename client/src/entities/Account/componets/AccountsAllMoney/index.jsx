import { useSelector } from "react-redux";
import { accountsModel } from "../../model";
import { getAllMoney } from "../../lib";
import { FormatedAmount } from "../../../../shared";

const AccountsAllMoney = () => {
    const accounts = useSelector(accountsModel.getAccountsList());
    const dataStatus = useSelector(accountsModel.getAccountsDataStatus());
    if (dataStatus) {
        const amount = getAllMoney(accounts);
        return (
            <div className="flex sm:text-2xl flex-col">
                <FormatedAmount amount={amount} />
                <p className="text-sm text-gray-500">Всего денег</p>
            </div>
        );
    }
};

export default AccountsAllMoney;
