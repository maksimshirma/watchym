import PropTypes from "prop-types";
import { useState } from "react";
import { TextField, Button } from "../../../shared";
import { useDispatch, useSelector } from "react-redux";
import { accountsModel } from "../../../entities";
import { modalModel } from "../../modal";

const EditAccountForm = ({ _id }) => {
    const dispatch = useDispatch();
    const account = useSelector(accountsModel.getAccountById(_id));

    //prettier-ignore
    const [data, setData] = useState(
        account
            ? account
            : {
                name: "",
                number: "",
                amount: "",
            }
    );

    const handleChange = ({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        const newData = {
            _id,
            name: data.name,
            number: data.number,
            amount: Number(data.amount),
        };

        dispatch(accountsModel.updateAccount(newData));
        dispatch(modalModel.handleCloseModal());
    };

    const handleCancel = () => {
        dispatch(modalModel.handleCloseModal());
    };

    return (
        <div className="w-full flex flex-col items-center text-xs sm:text-sm lg:text-base">
            <div className="">
                <TextField
                    label={"Название счёта:"}
                    type={"text"}
                    name={"name"}
                    value={data.name}
                    onChange={handleChange}
                />
            </div>
            <div className="">
                <TextField
                    label={"Номер счёта:"}
                    type={"text"}
                    name={"number"}
                    value={String(data.number)}
                    onChange={handleChange}
                />
            </div>
            <div className="">
                <TextField
                    label={"Доступные средства:"}
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
};

EditAccountForm.propTypes = {
    _id: PropTypes.string,
    toggleEdit: PropTypes?.func,
};

export default EditAccountForm;
