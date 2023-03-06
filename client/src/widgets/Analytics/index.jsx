import { useState } from "react";
import { categoriesModel, operationsModel } from "../../entities";
import { useSelector } from "react-redux";
import {
    ExpenseCategoriesList,
    ChangeMonth,
    ExpenseBar,
    analyticsHelpers,
    FilterOperations,
    useFilter,
    useModal,
} from "../../features";
import { PageHeader, Button, Loader } from "../../shared";

const Analytics = () => {
    const { setConfig, filter, config } = useFilter();
    const { openModal } = useModal();

    const expenseOperations = useSelector(operationsModel.getExpenseOperationsList());
    const operationsDataStatus = useSelector(operationsModel.getOperationsDataStatus());
    const categoriesDataStatus = useSelector(categoriesModel.getCategoriesDataStatus());

    const [startDate, setStartDate] = useState(analyticsHelpers.getStart());
    const [endDate, setEndDate] = useState(analyticsHelpers.getEnd());

    const handleFilter = () => {
        openModal(
            <FilterOperations
                options={{
                    account: true,
                }}
                setConfig={setConfig}
                config={config}
            />
        );
    };

    if (categoriesDataStatus && operationsDataStatus) {
        const filteredOperations = filter(
            analyticsHelpers.filterOperationsByDate(expenseOperations, startDate, endDate)
        );
        return (
            <div className="w-full h-[calc(100%-34px)] p-1">
                <PageHeader>Аналитика</PageHeader>
                <div className="pb-2">
                    <div className="flex flex-row">
                        <div className="mr-1">
                            <Button title={"Фильтры"} onClick={handleFilter} />
                        </div>
                        <div className="mr-1">
                            <Button title={"Сбросить"} onClick={() => setConfig(null)} />
                        </div>
                    </div>
                </div>
                <div className="w-full grid justify-items-center items-center bg-gray-300 rounded-lg">
                    <div className="w-1/4 py-3">
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
                <div className="w-full mt-3 overflow-y-auto">
                    <PageHeader>Категории</PageHeader>
                    <ExpenseCategoriesList operations={filteredOperations} />
                </div>
            </div>
        );
    }
    return (
        <div className="flex justify-center items-center">
            <Loader />
        </div>
    );
};

export default Analytics;
