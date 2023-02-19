import PropTypes from "prop-types";
import Account from "../Account";
import { accountsModel } from "../../model";
import { useSelector } from "react-redux";

const AccountsList = ({ onEdit }) => {
    const accounts = useSelector(accountsModel.getAccountsList());
    const dataStatus = useSelector(accountsModel.getAccountsDataStatus());
    if (dataStatus)
        return (
            <>
                {accounts && accounts.map((account) => <Account key={account._id} _id={account._id} onEdit={onEdit} />)}
            </>
        );
    return null;
};

AccountsList.propTypes = {
    onEdit: PropTypes.func,
};

export default AccountsList;
