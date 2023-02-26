import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userModel } from "../../model";

const UserLoader = ({ children }) => {
    const dispatch = useDispatch();
    const dataStatus = useSelector(userModel.getUserDataStatus());
    useEffect(() => {
        if (!dataStatus) {
            dispatch(userModel.loadUser());
        }
    }, [dispatch, dataStatus]);
    return children;
};

UserLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default UserLoader;
