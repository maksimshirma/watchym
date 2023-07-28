// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { TextField, SubmitButton, parseYupError } from "../../../shared";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { accountsModel } from "../../../entities";
import { useModal } from "../../../features";
import { validationSchema } from "../lib";

const CreateAccountForm = () => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    //prettier-ignore
    const [data, setData] = useState(
        {
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
                _id: nanoid(),
                name: data.name,
                number: data.number,
                amount: Number(data.amount.toString().replaceAll(",", ".")),
            };
            dispatch(accountsModel.createAccount(newData));
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

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center text-xs sm:text-sm lg:text-base">
                <TextField
                    label={"Название счёта:"}
                    name={"name"}
                    value={data.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    label={"Номер счёта:"}
                    name={"number"}
                    value={String(data.number)}
                    onChange={handleChange}
                    error={errors.number}
                />
                <TextField
                    label={"Доступные средства:"}
                    name={"amount"}
                    value={String(data.amount)}
                    onChange={handleChange}
                    error={errors.amount}
                />
                <div className="w-full">
                    <SubmitButton title={"Принять"} />
                </div>
            </form>
        </div>
    );
};

// CreateAccountForm.propTypes = {};

export default CreateAccountForm;
