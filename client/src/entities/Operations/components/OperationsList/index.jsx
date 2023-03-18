import PropTypes from "prop-types";
import Operation from "../Operation";

const OperationsList = ({ sortedOperations, onEdit, ...props }) => {
    return (
        <div className="w-full overflow-y-auto" style={{ ...props }}>
            {sortedOperations &&
                sortedOperations.map((operation) => (
                    <Operation key={operation._id} _id={operation._id} onEdit={onEdit} />
                ))}
        </div>
    );
};

OperationsList.propTypes = {
    sortedOperations: PropTypes.arrayOf(PropTypes.object),
    onEdit: PropTypes.func,
};

export default OperationsList;
