import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, getUserDataStatus } from "../../model";

const UserLoader = ({ children }) => {
    const dispatch = useDispatch();
    const dataStatus = useSelector(getUserDataStatus());
    useEffect(() => {
        if (!dataStatus) {
            dispatch(loadUser());
        }
    }, [dispatch, dataStatus]);
    return children;
};

UserLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default UserLoader;
