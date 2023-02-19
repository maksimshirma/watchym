// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { OperationsList, operationsModel } from "../../entities";
import { modalModel, CreateOperationForm, EditOperationForm } from "../../features";
import { Button } from "../../shared";

const Operations = () => {
    const dispatch = useDispatch();
    // const [selectedAccount, setSelectedAccount] = useState(null);
    // const [selectedType, setSelectedType] = useState(null);

    // const operations = useSelector(operationsModel.getOperationsList());
    const operationsDataStatus = useSelector(operationsModel.getOperationsDataStatus());

    // const accounts = useSelector(accountsModel.getAccountsList());
    // const accountsDataStatus = useSelector(accountsModel.getAccountsDataStatus());

    const handleCreate = () => {
        dispatch(modalModel.handleOpenModal(<CreateOperationForm />));
    };

    const handleEdit = (id) => {
        dispatch(modalModel.handleOpenModal(<EditOperationForm _id={id} />));
    };

    // const handleAccountSelect = (item) => {
    //     if (item === selectedAccount) {
    //         setSelectedAccount(null);
    //     } else {
    //         setSelectedAccount(item);
    //     }
    // };

    // const handleTypeSelect = (item) => {
    //     if (selectedType) {
    //         setSelectedType(null);
    //     } else {
    //         setSelectedType(item);
    //     }
    // };

    // const handleResetSelectedFields = () => {
    //     setSelectedAccount(null);
    //     setSelectedType(null);
    // };

    if (operationsDataStatus) {
        // const sortedByAccountOperations =
        //     operations && selectedAccount
        //         ? operations.filter((operation) => operation.account === selectedAccount._id)
        //         : operations;
        // const sortedByTypeOperations =
        //     sortedByAccountOperations && selectedType
        //         ? sortedByAccountOperations.filter((operation) => operation.type === selectedType.value)
        //         : sortedByAccountOperations;
        return (
            <div className="flex">
                {/* {accountsDataStatus && (
                    <div className="w-1/6 bg-neutral-400 rounded-lg h-max">
                        <GroupList
                            items={accounts}
                            label={"Счёт"}
                            selectedItem={selectedAccount}
                            onItemSelect={handleAccountSelect}
                        />
                        <GroupList
                            items={[
                                { name: "Доход", value: "income" },
                                { name: "Расход", value: "expense" },
                            ]}
                            valueProperty={"value"}
                            label={"Тип"}
                            selectedItem={selectedType}
                            onItemSelect={handleTypeSelect}
                        />
                        <button className="mb-1 ml-3" onClick={handleResetSelectedFields}>
                            Сбросить
                        </button>
                    </div>
                )} */}
                <div className="w-full m-1">
                    <OperationsList onEdit={handleEdit} />
                    <Button title={"new"} onClick={handleCreate} />
                </div>
            </div>
        );
    }
    return "Loading...";
};

export default Operations;
