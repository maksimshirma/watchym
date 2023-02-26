import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { operationsModel } from "../../model";

const OperationsLoader = ({ children }) => {
    const dispatch = useDispatch();
    const dataStatus = useSelector(operationsModel.getOperationsDataStatus());
    useEffect(() => {
        if (!dataStatus) {
            dispatch(operationsModel.loadOperationsList());
        }
    }, [dispatch, dataStatus]);
    return children;
};

OperationsLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default OperationsLoader;
