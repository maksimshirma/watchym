import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { accountsModel } from "../../model";
import { FormatedAmount, PageHeader } from "../../../../shared";
import { OperationsList, operationsModel } from "../../../Operations";

const AccountCard = ({ id }) => {
    const account = useSelector(accountsModel.getAccountById(id));
    const accountsDataStatus = useSelector(accountsModel.getAccountsDataStatus());
    const operations = useSelector(operationsModel.getOperationsByAccountId(id));
    if (accountsDataStatus) {
        const { name, amount } = account;
        return (
            <div className="w-full h-full flex flex-col p-1">
                <div className="px-2 flex flex-row text-sm sm:text-lg">
                    <div>{name}</div>
                    <div className="grow flex justify-end">
                        <FormatedAmount amount={amount} />
                    </div>
                </div>
                <PageHeader>Операции</PageHeader>
                <OperationsList sortedOperations={operations} />
            </div>
        );
    }
};

AccountCard.propTypes = {
    id: PropTypes.string,
};

export default AccountCard;
