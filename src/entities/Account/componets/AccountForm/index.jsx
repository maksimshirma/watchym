import PropTypes from "prop-types";
import { useState } from "react";
import { Button, TextField } from "../../../../shared";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { createAccount, updateAccount } from "../../model";

const AccountForm = ({ type, account, toggleOpen, toggleEdit, editAccountId }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState(account ? account : {});
    const handleChange = ({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = () => {
        const newData = {
            _id: nanoid(),
            name: data.name,
            number: Number(data.number),
            amount: Number(data.amount),
        };
        dispatch(createAccount(newData));
        toggleOpen();
    };
    const handleEdit = () => {
        const newData = {
            _id: editAccountId,
            name: data.name,
            number: Number(data.number),
            amount: Number(data.amount),
        };
        dispatch(updateAccount(newData));
        toggleEdit(null);
    };

    return (
        <div className="w-full my-1 border-[1px] border-black flex items-center rounded-lg text-xs sm:text-sm lg:text-base">
            <div className="w-1/4">
                <TextField
                    label={"Название счёта:"}
                    type={"text"}
                    name={"name"}
                    value={data.name}
                    onChange={handleChange}
                />
            </div>
            <div className="w-1/4">
                <TextField
                    label={"Номер счёта:"}
                    type={"text"}
                    name={"number"}
                    value={data.number}
                    onChange={handleChange}
                />
            </div>
            <div className="w-1/4">
                <TextField
                    label={"Доступные средства:"}
                    type={"text"}
                    name={"amount"}
                    value={data.amount}
                    onChange={handleChange}
                />
            </div>
            <div className="grow text-right text-[10px] sm:text-sm lg:text-base">
                {type === "create" ? (
                    <>
                        <Button title={"Добавить"} onClick={handleSubmit} />
                        <Button title={"Отмена"} onClick={toggleOpen} />
                    </>
                ) : type === "edit" ? (
                    <>
                        <Button title={"Изменить"} onClick={handleEdit} />
                        <Button title={"Отмена"} onClick={() => toggleEdit(null)} />
                    </>
                ) : null}
            </div>
        </div>
    );
};

AccountForm.propTypes = {
    type: PropTypes.string,
    account: PropTypes?.object,
    toggleOpen: PropTypes?.func,
    toggleEdit: PropTypes?.func,
    editAccountId: PropTypes?.string,
};

export default AccountForm;
