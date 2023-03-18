import { useSelector } from "react-redux";
import { OperationsList, operationsModel } from "../../entities";
import { CreateOperationForm, EditOperationForm, FilterOperations, useFilter, useModal } from "../../features";
import { Button, Loader, PageHeader } from "../../shared";

const Operations = () => {
    const { setConfig, filter, config } = useFilter();
    const { openModal } = useModal();

    const operations = useSelector(operationsModel.getOperationsList());
    const operationsDataStatus = useSelector(operationsModel.getOperationsDataStatus());

    if (operationsDataStatus) {
        return (
            <div className="w-full h-[calc(100%-34px)] flex flex-col p-1">
                <PageHeader>История</PageHeader>
                <div className="flex flex-row">
                    <Button
                        title={"Фильтры"}
                        onClick={() =>
                            openModal(
                                <FilterOperations
                                    options={{
                                        account: true,
                                        type: true,
                                        category: true,
                                        startDate: true,
                                        endDate: true,
                                    }}
                                    setConfig={setConfig}
                                    config={config}
                                />
                            )
                        }
                        marginRight={"5px"}
                    />
                    <Button title={"Сбросить"} onClick={() => setConfig(null)} marginRight={"5px"} />
                    <Button title={"Добавить"} onClick={() => openModal(<CreateOperationForm />)} />
                </div>
                <OperationsList
                    sortedOperations={filter(operations)}
                    onEdit={(id) => openModal(<EditOperationForm _id={id} />)}
                    marginTop={"10px"}
                />
            </div>
        );
    }
    return (
        <div className="flex justify-center items-center">
            <Loader />
        </div>
    );
};

export default Operations;
