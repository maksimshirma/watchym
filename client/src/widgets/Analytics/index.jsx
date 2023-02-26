import { useState } from "react";
import { categoriesModel, operationsModel, operationsHelpers } from "../../entities";
import { useSelector } from "react-redux";
import { ExpenseCategoriesList, ChangeMonth, ExpenseBar, analyticsHelpers, FilterOperations } from "../../features";
import { PageHeader } from "../../shared";

const Analytics = () => {
    const expenseOperations = useSelector(operationsModel.getExpenseOperationsList());
    const operationsDataStatus = useSelector(operationsModel.getOperationsDataStatus());
    const categoriesDataStatus = useSelector(categoriesModel.getCategoriesDataStatus());

    const [startDate, setStartDate] = useState(analyticsHelpers.getStart());
    const [endDate, setEndDate] = useState(analyticsHelpers.getEnd());

    const [filter, setFilter] = useState({
        account: "",
        type: "",
    });

    if (categoriesDataStatus && operationsDataStatus) {
        const filteredOperations = operationsHelpers.filterOperations(
            analyticsHelpers.filterOperationsByDate(expenseOperations, startDate, endDate),
            filter
        );
        return (
            <div className="w-full h-full">
                <div className="flex pb-2">
                    <div>
                        <FilterOperations onFilter={setFilter} />
                    </div>
                </div>
                <div className="w-full h-1/6 grid justify-items-center items-center bg-gray-300 rounded-lg">
                    <div className="w-fit py-3">
                        <ChangeMonth
                            startDate={startDate}
                            endDate={endDate}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                        />
                    </div>
                    <div className="w-full pb-3">
                        <ExpenseBar operations={filteredOperations} />
                    </div>
                </div>
                <div className="w-full h-4/6 mt-3 overflow-y-auto">
                    <PageHeader>Категории</PageHeader>
                    <ExpenseCategoriesList operations={filteredOperations} />
                </div>
            </div>
        );
    }
    return null;
};

export default Analytics;
