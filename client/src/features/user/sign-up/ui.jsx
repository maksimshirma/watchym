import { useState, useEffect } from "react";
import { TextField, SubmitButton } from "../../../shared";
import { useDispatch, useSelector } from "react-redux";
import { userModel } from "../../../entities";
import { parseYupError } from "../../lib";
import { getErrorMessage } from "../lib";
import * as yup from "yup";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const authError = useSelector(userModel.getAuthError());

    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
    });

    const [errors, setErrors] = useState({});

    const isValid = Object.keys(errors).length === 0;

    const handleChange = ({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            dispatch(userModel.signUp(data));
        }
    };

    const validationSchema = yup.object().shape({
        email: yup.string().required("Электронная почта обязательна для заполнения").email("Email введён некорректно"),
        password: yup.string().required("Пароль обязателен для заполнения").min(8, "Должно быть не менее 8 символов"),
        name: yup.string().required("Имя обязательно для заполнения").min(2, "Должно быть не менее 2 символов"),
    });

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
        <form onSubmit={handleSubmit}>
            <TextField
                type={"text"}
                label={"Email:"}
                name={"email"}
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                type={"password"}
                label={"Пароль:"}
                name={"password"}
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <TextField
                type={"text"}
                label={"Ваше имя:"}
                name={"name"}
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            {authError && <p className="text-danger">{getErrorMessage(authError)}</p>}
            <SubmitButton title={"Зарегестрироваться"} />
        </form>
    );
};

export default RegistrationForm;
