import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button, TextField, convertDateToString, convertDateToNumber, SelectField } from "../../../shared";
import { accountsModel, categoriesModel } from "../../../entities";
import { useModal } from "../../../features";

const FilterOperations = ({ options, setConfig, config }) => {
    const { closeModal } = useModal();

    //prettier-ignore
    const [data, setData] = useState(
        config
            ? config
            : {
                account: null,
                type: null,
                category: null,
                startDate: null,
                endDate: null,
            }
    );

    const accounts = useSelector(accountsModel.getAccountsList());
    const categories = useSelector(categoriesModel.getCategoriesList());

    const handleChange = (target) => {
        let { name, value } = target;
        if (name === "startDate" || name === "endDate") {
            value = convertDateToNumber(value);
        }
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleResetSelectedFields = () => {
        setConfig({
            selectedAccount: null,
            selectedType: null,
            selectedCategory: null,
            startDate: null,
            endDate: null,
        });
        closeModal();
    };

    const handleAccessFilter = () => {
        setConfig(data);
        closeModal();
    };

    return (
        <div className="w-full p-2">
            {options.account && accounts && (
                <SelectField
                    label={"Счёт:"}
                    name={"account"}
                    options={accounts}
                    value={data.account ? accounts.find((account) => account._id === data.account) : null}
                    onChange={handleChange}
                />
            )}
            {options.category && categories && (
                <SelectField
                    label={"Категория:"}
                    name={"category"}
                    options={categories}
                    value={data.category ? categories.find((category) => category._id === data.category) : null}
                    onChange={handleChange}
                />
            )}
            {options.type && (
                <SelectField
                    label={"Тип операции:"}
                    name={"type"}
                    options={[
                        { label: "Доход", value: "income" },
                        { label: "Расход", value: "expense" },
                    ]}
                    //prettier-ignore
                    value={
                        data.type === "income"
                            ? { label: "Доход", value: "income" }
                            : data.type === "expense"
                                ? { label: "Расход", value: "expense" }
                                : null
                    }
                    onChange={handleChange}
                />
            )}
            {options.startDate && (
                <TextField
                    label={"Начальная дата:"}
                    type={"date"}
                    name={"startDate"}
                    value={data.startDate ? convertDateToString(data.startDate) : ""}
                    onChange={handleChange}
                />
            )}
            {options.endDate && (
                <TextField
                    label={"Конечная дата:"}
                    type={"date"}
                    name={"endDate"}
                    value={data.endDate ? convertDateToString(data.endDate) : ""}
                    onChange={handleChange}
                />
            )}
            <div className="flex">
                <div className="mr-1">
                    <Button title={"Принять"} onClick={handleAccessFilter} />
                </div>
                <div>
                    <Button title={"Сбросить"} onClick={handleResetSelectedFields} />
                </div>
            </div>
        </div>
    );
};

FilterOperations.propTypes = {
    options: PropTypes.object,
    setConfig: PropTypes.func,
    config: PropTypes.object,
};

export default FilterOperations;
