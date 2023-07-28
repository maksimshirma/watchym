import { useState, useEffect } from "react";
import {
    TextField,
    SelectField,
    convertDateToNumber,
    convertDateToString,
    SubmitButton,
    parseYupError,
} from "../../../shared";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { accountsModel, operationsModel, categoriesModel } from "../../../entities";
import { useModal } from "../../../features";
import { validationSchema } from "../lib";

const CreateOperationForm = () => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const accounts = useSelector(accountsModel.getAccountsList());
    const categories = useSelector(categoriesModel.getCategoriesList());

    //prettier-ignore
    const [data, setData] = useState(
        {
            account: "",
            type: "",
            category: "",
            amount: "",
            date: "",
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
                _id: nanoid(),
                type: data.type,
                date: convertDateToNumber(data.date),
                amount: Number(data.amount.replaceAll(",", ".")),
                account: data.account,
                category: data.type === "income" ? "" : data.category,
            };
            dispatch(operationsModel.createOperation(newData));
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

    if (accounts.length === 0) {
        return "У вас нет счетов.";
    }
    if (accounts.length !== 0 && categories.length !== 0) {
        return (
            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center rounded-lg text-xs sm:text-sm lg:text-base"
            >
                <SelectField
                    label={"Счёт:"}
                    name={"account"}
                    options={accounts}
                    onChange={handleChange}
                    error={errors.account}
                />
                <SelectField
                    label={"Тип операции:"}
                    name={"type"}
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
                <div className="w-full">
                    <SubmitButton title={"Принять"} />
                </div>
            </form>
        );
    }
    return "Loading...";
};

export default CreateOperationForm;
