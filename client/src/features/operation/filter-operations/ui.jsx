import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { DropdownMenu, Button, GroupList } from "../../../shared";
import { accountsModel } from "../../../entities";

const FilterOperations = ({ onFilter }) => {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [selectedType, setSelectedType] = useState(null);

    const accounts = useSelector(accountsModel.getAccountsList());

    const handleAccountSelect = (item) => {
        if (item === selectedAccount) {
            setSelectedAccount(null);
        } else {
            setSelectedAccount(item);
        }
    };

    const handleTypeSelect = (item) => {
        if (selectedType) {
            setSelectedType(null);
        } else {
            setSelectedType(item);
        }
    };

    const handleResetSelectedFields = () => {
        onFilter({});
        setSelectedAccount(null);
        setSelectedType(null);
    };

    const handleAccessFilter = () => {
        onFilter({
            account: selectedAccount ? selectedAccount._id : "",
            type: selectedType ? selectedType.value : "",
        });
    };

    if (accounts)
        return (
            <div className="w-full">
                <DropdownMenu>
                    <Button title={"Фильтры"} />
                    <div className="w-full p-1 bg-gray-200 hover:bg-gray-100 first:rounded-t-lg">
                        <GroupList
                            items={accounts}
                            label={"Счёт"}
                            onItemSelect={handleAccountSelect}
                            selectedItem={selectedAccount}
                        />
                    </div>
                    <div className="w-full p-1 bg-gray-200 hover:bg-gray-100">
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
                    </div>
                    <div className="w-full p-1 bg-gray-200 hover:bg-gray-100">
                        <button onClick={handleAccessFilter}>Принять</button>
                    </div>
                    <div className="w-full p-1 bg-gray-200 hover:bg-gray-100 last:rounded-b-lg">
                        <button onClick={handleResetSelectedFields}>Сбросить</button>
                    </div>
                </DropdownMenu>
            </div>
        );
    return null;
};

FilterOperations.propTypes = {
    onFilter: PropTypes.func,
};

export default FilterOperations;
