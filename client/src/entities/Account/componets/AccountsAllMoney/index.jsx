import { useSelector } from "react-redux";
import { accountsModel } from "../../model";
import { getAllMoney } from "../../lib";
import { FormatedAmount } from "../../../../shared";

const AccountsAllMoney = () => {
    const accounts = useSelector(accountsModel.getAccountsList());
    const dataStatus = useSelector(accountsModel.getAccountsDataStatus());
    const amount = getAllMoney(accounts);
    if (dataStatus) {
        return (
            <div className="flex flex-col">
                <FormatedAmount amount={amount} />
                <p className="text-sm text-gray-500">{"Всего денег"}</p>
            </div>
        );
    }
};

export default AccountsAllMoney;
