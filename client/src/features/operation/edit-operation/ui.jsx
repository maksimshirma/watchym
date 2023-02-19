import PropTypes from "prop-types";
import { useState } from "react";
import { TextField, SelectField, convertDate, Button } from "../../../shared";
import { useDispatch, useSelector } from "react-redux";
import { operationsModel, accountsModel } from "../../../entities";
import { modalModel } from "../../../features";

const EditOperationForm = ({ _id }) => {
    const dispatch = useDispatch();
    const accounts = useSelector(accountsModel.getAccountsList());
    const operation = useSelector(operationsModel.getOperationById(_id));

    //prettier-ignore
    const [data, setData] = useState(
        operation
            ? operation
            : {
                account: "",
                type: "",
                amount: "",
                date: "",
            }
    );

    const handleChange = ({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        const newData = {
            _id,
            type: data.type,
            date: convertDate(data.date),
            amount: Number(data.amount),
            account: data.account,
        };

        dispatch(operationsModel.updateOperation(newData));
        dispatch(modalModel.handleCloseModal());
    };

    const handleCancel = () => {
        dispatch(modalModel.handleCloseModal());
    };

    if (accounts) {
        return (
            <div className="w-full flex flex-col text-xs sm:text-sm lg:text-base">
                <div className="">
                    <SelectField label={"Счёт:"} name={"account"} options={accounts} onChange={handleChange} />
                </div>
                <div className="">
                    <SelectField
                        label={"Тип операции:"}
                        name={"type"}
                        options={[
                            { label: "Доход", value: "income" },
                            { label: "Расход", value: "expense" },
                        ]}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <TextField
                        label={"Дата:"}
                        type={"date"}
                        name={"date"}
                        value={String(data.date)}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <TextField
                        label={"Сумма:"}
                        type={"text"}
                        name={"amount"}
                        value={String(data.amount)}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <Button title={"Принять"} onClick={handleSubmit} />
                    <Button title={"Отмена"} onClick={handleCancel} />
                </div>
            </div>
        );
    }
    return "Loading...";
};

EditOperationForm.propTypes = {
    _id: PropTypes.string,
};

export default EditOperationForm;
