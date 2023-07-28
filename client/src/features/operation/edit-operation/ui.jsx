import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
    TextField,
    SelectField,
    convertDateToNumber,
    convertDateToString,
    Button,
    SubmitButton,
    parseYupError,
} from "../../../shared";
import { useDispatch, useSelector } from "react-redux";
import { operationsModel, accountsModel, categoriesModel } from "../../../entities";
import { useModal } from "../../../features";
import { validationSchema } from "../lib";

const EditOperationForm = ({ _id }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const accounts = useSelector(accountsModel.getAccountsList());
    const operation = useSelector(operationsModel.getOperationById(_id));
    const categories = useSelector(categoriesModel.getCategoriesList());

    //prettier-ignore
    const [data, setData] = useState(
        operation
            ? operation
            : {
                account: "",
                type: "",
                amount: "",
                date: "",
                category: "",
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
                type: data.type,
                date: typeof data.date === "string" ? convertDateToNumber(data.date) : data.date,
                amount: data.amount ?? Number(data.amount.replaceAll(",", ".")),
                account: data.account,
                category: data.type === "income" ? "" : data.category,
            };
            dispatch(operationsModel.updateOperation(newData));
            closeModal();
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
        dispatch(operationsModel.deleteOperation(_id));
        closeModal();
    };

    if (accounts && categories) {
        return (
            <form onSubmit={handleSubmit} className="w-full flex flex-col text-xs sm:text-sm lg:text-base">
                <SelectField
                    label={"Счёт:"}
                    name={"account"}
                    value={accounts.find((account) => account._id === data.account)}
                    options={accounts}
                    onChange={handleChange}
                    error={errors.account}
                />
                <SelectField
                    label={"Тип операции:"}
                    name={"type"}
                    value={
                        data.type === "income"
                            ? { label: "Доход", value: "income" }
                            : { label: "Расход", value: "expense" }
                    }
                    options={[
                        { label: "Доход", value: "income" },
                        { label: "Расход", value: "expense" },
                    ]}
                    onChange={handleChange}
                    error={errors.type}
                />
                {data.type === "expense" && (
                    <SelectField
                        label={"Категория операции:"}
                        name={"category"}
                        value={categories.find((category) => category._id === data.category)}
                        options={categories}
                        onChange={handleChange}
                        error={errors.category}
                    />
                )}
                <TextField
                    label={"Сумма:"}
                    name={"amount"}
                    value={String(data.amount)}
                    onChange={handleChange}
                    error={errors.amount}
                />
                <TextField
                    label={"Дата:"}
                    type={"date"}
                    name={"date"}
                    value={data.date ? convertDateToString(data.date) : ""}
                    onChange={handleChange}
                    error={errors.date}
                />
                <div className="flex">
                    <div className="mr-1">
                        <SubmitButton title={"Принять"} />
                    </div>
                    <div>
                        <Button title={"Удалить"} onClick={handleDelete} />
                    </div>
                </div>
            </form>
        );
    }
    return "Loading...";
};

EditOperationForm.propTypes = {
    _id: PropTypes.string,
};

export default EditOperationForm;
