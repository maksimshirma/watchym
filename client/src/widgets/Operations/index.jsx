import { useSelector } from "react-redux";
import { OperationsList, operationsModel } from "../../entities";
import { CreateOperationForm, EditOperationForm, FilterOperations, useFilter, useModal } from "../../features";
import { Button, Loader, PageHeader } from "../../shared";

const Operations = () => {
    const { setConfig, filter, config } = useFilter();
    const { openModal } = useModal();

    const operations = useSelector(operationsModel.getOperationsList());
    const operationsDataStatus = useSelector(operationsModel.getOperationsDataStatus());

    const handleFilter = () => {
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
        );
    };

    const handleCreate = () => {
        openModal(<CreateOperationForm />);
    };

    const handleEdit = (id) => {
        openModal(<EditOperationForm _id={id} />);
    };

    if (operationsDataStatus) {
        return (
            <div className="w-full h-[calc(100%-34px)] flex flex-col p-1">
                <PageHeader>История</PageHeader>
                <div className="flex flex-row">
                    <div className="mr-1">
                        <Button title={"Фильтры"} onClick={handleFilter} />
                    </div>
                    <div className="mr-1">
                        <Button title={"Сбросить"} onClick={() => setConfig(null)} />
                    </div>
                    <div className="">
                        <Button title={"Добавить"} onClick={handleCreate} />
                    </div>
                </div>
                <div className="w-full mt-1 overflow-y-auto">
                    <OperationsList sortedOperations={filter(operations)} onEdit={handleEdit} />
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

export default Operations;
