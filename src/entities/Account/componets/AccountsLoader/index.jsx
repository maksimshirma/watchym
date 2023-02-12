import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAccountsList, getAccountsDataStatus } from "../../model";

const AccountsLoader = ({ children }) => {
    const dispatch = useDispatch();
    const dataStatus = useSelector(getAccountsDataStatus());
    useEffect(() => {
        if (!dataStatus) {
            dispatch(loadAccountsList());
        }
    }, [dispatch, dataStatus]);
    return children;
};

AccountsLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AccountsLoader;
