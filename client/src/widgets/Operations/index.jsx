import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OperationsList, operationsModel } from "../../entities";
import {
    modalModel,
    CreateOperationForm,
    EditOperationForm,
    FilterOperations,
    analyticsHelpers,
    ChangeMonth,
} from "../../features";
import { Button } from "../../shared";

const Operations = () => {
    const dispatch = useDispatch();
    const operations = useSelector(operationsModel.getOperationsList());
    const operationsDataStatus = useSelector(operationsModel.getOperationsDataStatus());

    const [startDate, setStartDate] = useState(analyticsHelpers.getStart());
    const [endDate, setEndDate] = useState(analyticsHelpers.getEnd());

    const [filter, setFilter] = useState({
        account: "",
        type: "",
    });

    const handleCreate = () => {
        dispatch(modalModel.handleOpenModal(<CreateOperationForm />));
    };

    const handleEdit = (id) => {
        dispatch(modalModel.handleOpenModal(<EditOperationForm _id={id} />));
    };

    if (operationsDataStatus) {
        const operationsSortedByDate = analyticsHelpers.filterOperationsByDate(operations, startDate, endDate);
        return (
            <div className="w-full h-full flex flex-col">
                <div className="w-1/3 py-2 mx-auto">
                    <ChangeMonth
                        startDate={startDate}
                        endDate={endDate}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                    />
                </div>
                <div className="flex flex-row">
                    <div className="mr-1">
                        <FilterOperations onFilter={setFilter} />
                    </div>
                    <div className="">
                        <Button title={"Добавить"} onClick={handleCreate} />
                    </div>
                </div>
                <div className="w-full h-full mt-1 overflow-y-auto">
                    <OperationsList sortedOperations={operationsSortedByDate} filter={filter} onEdit={handleEdit} />
                </div>
            </div>
        );
    }
    return "Loading...";
};

export default Operations;
