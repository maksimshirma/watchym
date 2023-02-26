import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { TextField, Button, SubmitButton } from "../../../shared";
import { useDispatch, useSelector } from "react-redux";
import { accountsModel, operationsModel } from "../../../entities";
import { modalModel } from "../../modal";
import { validationSchema } from "../lib";
import { parseYupError } from "../../lib";

const EditAccountForm = ({ _id }) => {
    const dispatch = useDispatch();
    const account = useSelector(accountsModel.getAccountById(_id));
    const operations = useSelector(operationsModel.getOperationsList());

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

    const [errors, setErrors] = useState({});

    const isValid = Object.keys(errors).length === 0;

    const handleChange = ({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            const newData = {
                _id,
                name: data.name,
                number: data.number,
                amount: Number(data.amount.toString().replaceAll(",", ".")),
            };

            dispatch(accountsModel.updateAccount(newData));
            dispatch(modalModel.handleCloseModal());
        }
    };

    useEffect(() => {
        validationSchema
            .validate(data, { abortEarly: false })
            .then(() => setErrors({}))
            .catch((yupError) => {
                const errors = parseYupError(yupError);
                setErrors(errors);
            });
        // eslint-disable-next-line
    }, [data]);

    const handleDelete = () => {
        operations.forEach((operation) => {
            if (operation.account === _id) dispatch(operationsModel.deleteOperation(operation._id));
        });
        dispatch(accountsModel.deleteAccount(_id));
        dispatch(modalModel.handleCloseModal());
    };

    const handleCancel = () => {
        dispatch(modalModel.handleCloseModal());
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center text-xs sm:text-sm lg:text-base">
            <TextField
                label={"Название счёта:"}
                type={"text"}
                name={"name"}
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label={"Номер счёта:"}
                type={"text"}
                name={"number"}
                value={String(data.number)}
                onChange={handleChange}
                error={errors.number}
            />
            <TextField
                label={"Доступные средства:"}
                type={"text"}
                name={"amount"}
                value={String(data.amount)}
                onChange={handleChange}
                error={errors.amount}
            />
            <div className="w-full flex flex-row">
                <div className="flex-auto text-center">
                    <SubmitButton title={"Принять"} />
                </div>
                <div className="flex-auto text-center">
                    <Button title={"Отмена"} onClick={handleCancel} />
                </div>
                <div className="flex-auto text-center">
                    <Button title={"Удалить"} onClick={handleDelete} />
                </div>
            </div>
        </form>
    );
};

EditAccountForm.propTypes = {
    _id: PropTypes.string,
    toggleEdit: PropTypes?.func,
};

export default EditAccountForm;
