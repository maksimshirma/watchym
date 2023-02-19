import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountsModel } from "../../model";

const AccountsLoader = ({ children }) => {
    const dispatch = useDispatch();
    const dataStatus = useSelector(accountsModel.getAccountsDataStatus());
    useEffect(() => {
        if (!dataStatus) {
            dispatch(accountsModel.loadAccountsList());
        }
    }, [dispatch, dataStatus]);
    return children;
};

AccountsLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AccountsLoader;
