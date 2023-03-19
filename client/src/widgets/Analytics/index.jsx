import { categoriesModel, operationsModel, CategoriesList, ExpenseBar, SummaryAmount, GraphBar } from "../../entities";
import { useSelector } from "react-redux";
import { ChangeMonth, FilterOperations, useFilter, useModal, useAnalytics, useDate } from "../../features";
import { PageHeader, Button, Loader } from "../../shared";

const Analytics = () => {
    const { setConfig, filter, config } = useFilter();
    const { openModal } = useModal();
    const { summaryAmount, getAmountPerCategory } = useAnalytics();
    const { startDate, endDate, setNextMonth, setPrevMonth, filterByDate } = useDate();

    const operations = useSelector(operationsModel.getOperationsList());
    const operationsDataStatus = useSelector(operationsModel.getOperationsDataStatus());
    const categories = useSelector(categoriesModel.getCategoriesList());
    const categoriesDataStatus = useSelector(categoriesModel.getCategoriesDataStatus());

    if (categoriesDataStatus && operationsDataStatus) {
        const filteredOperations = filterByDate(operations, startDate, endDate);

        const expenseOperations = filter(filteredOperations.filter((operation) => operation.type === "expense"));
        const incomeOperations = filter(filteredOperations.filter((operation) => operation.type === "income"));

        const expenseSum = summaryAmount(expenseOperations);
        const incomeSum = summaryAmount(incomeOperations);

        const amountPerCategory = getAmountPerCategory(filter(expenseOperations), categories);

        const sum = expenseSum + incomeSum;
        return (
            <div className="w-full h-[calc(100%-34px)] p-1">
                <div className="flex flex-col h-full w-full">
                    <PageHeader>Аналитика</PageHeader>
                    <div className="flex flex-row pb-2">
                        <Button
                            title={"Фильтры"}
                            onClick={() =>
                                openModal(
                                    <FilterOperations
                                        options={{
                                            account: true,
                                            type: true,
                                        }}
                                        setConfig={setConfig}
                                        config={config}
                                    />
                                )
                            }
                            marginRight={"5px"}
                        />
                        <Button title={"Доходы"} onClick={() => setConfig({ type: "income" })} marginRight={"5px"} />
                        <Button title={"Расходы"} onClick={() => setConfig({ type: "expense" })} marginRight={"5px"} />
                        <Button title={"Сбросить"} onClick={() => setConfig(null)} marginRight={"5px"} />
                    </div>
                    <div className="grid justify-items-center items-center bg-gray-300 rounded-lg">
                        <ChangeMonth
                            startDate={startDate}
                            endDate={endDate}
                            setNextMonth={setNextMonth}
                            setPrevMonth={setPrevMonth}
                            width={"25%"}
                            padding={"10px 0px"}
                        />
                        {(!config || config.type === undefined) && (
                            <>
                                <SummaryAmount sum={expenseSum} title={"Расходы"} marginBottom={"10px"} width={"90%"} />
                                <GraphBar
                                    sideSum={expenseSum}
                                    mainSum={sum}
                                    color={"red"}
                                    marginBottom={"10px"}
                                    width={"90%"}
                                />
                                <SummaryAmount sum={incomeSum} title={"Доходы"} marginBottom={"10px"} width={"90%"} />
                                <GraphBar
                                    sideSum={incomeSum}
                                    mainSum={sum}
                                    color={"green"}
                                    marginBottom={"10px"}
                                    width={"90%"}
                                />
                            </>
                        )}
                        {config && config.type === "expense" && (
                            <>
                                <SummaryAmount sum={expenseSum} title={"Расходы"} marginBottom={"10px"} width={"90%"} />
                                <ExpenseBar
                                    sum={expenseSum}
                                    amountPerCategory={amountPerCategory}
                                    marginBottom={"10px"}
                                    width={"90%"}
                                />
                            </>
                        )}
                        {config && config.type === "income" && (
                            <>
                                <SummaryAmount sum={incomeSum} title={"Доходы"} marginBottom={"10px"} width={"90%"} />
                                <GraphBar
                                    sideSum={incomeSum}
                                    mainSum={sum}
                                    color={"green"}
                                    marginBottom={"10px"}
                                    width={"90%"}
                                />
                            </>
                        )}
                    </div>
                    {config && config.type === "expense" && (
                        <>
                            <PageHeader>Категории</PageHeader>
                            <CategoriesList
                                sum={expenseSum}
                                amountPerCategory={amountPerCategory}
                                height={"content-fit"}
                                maxHeight={"60%"}
                            />
                        </>
                    )}
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
