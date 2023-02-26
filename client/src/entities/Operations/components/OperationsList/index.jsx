import PropTypes from "prop-types";
import Operation from "../Operation";
import { operationsModel } from "../../model";
import { useSelector } from "react-redux";
import { filterOperations } from "../../lib";

const OperationsList = ({ sortedOperations, filter, onEdit }) => {
    const operationsList = useSelector(operationsModel.getOperationsList());
    const dataStatus = useSelector(operationsModel.getOperationsDataStatus());
    if (dataStatus) {
        const operations = filterOperations(sortedOperations ? sortedOperations : operationsList, filter);
        return (
            <>
                {operations &&
                    operations.map((operation) => (
                        <Operation key={operation._id} _id={operation._id} onEdit={onEdit} />
                    ))}
            </>
        );
    }
    return null;
};

OperationsList.propTypes = {
    sortedOperations: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.object,
    onEdit: PropTypes.func,
};

export default OperationsList;
