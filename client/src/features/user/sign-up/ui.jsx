import { TextField, PasswordField, SubmitButton, useForm } from "../../../shared";
import { useDispatch, useSelector } from "react-redux";
import { userModel } from "../../../entities";
import { getErrorMessage } from "../lib";
import * as yup from "yup";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const authError = useSelector(userModel.getAuthError());
    const isAuthProcessing = useSelector(userModel.getAuthProcessing());

    const initialData = {
        email: "",
        password: "",
        name: "",
    };

    const validationSchema = yup.object().shape({
        email: yup.string().required("Электронная почта обязательна для заполнения").email("Email введён некорректно"),
        password: yup.string().required("Пароль обязателен для заполнения").min(8, "Должно быть не менее 8 символов"),
        name: yup
            .string()
            .required("Имя обязательно для заполнения")
            .min(2, "Должно быть не менее 2 символов")
            .max(15, "Имя не может превышать 15 символов"),
    });

    const { data, validationErrors, isValid, handleChange } = useForm(validationSchema, initialData);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            dispatch(userModel.signUp(data));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label={"Email:"}
                name={"email"}
                value={data.email}
                onChange={handleChange}
                error={validationErrors.email}
            />
            <PasswordField
                label={"Пароль:"}
                name={"password"}
                value={data.password}
                onChange={handleChange}
                error={validationErrors.password}
            />
            <TextField
                label={"Ваше имя:"}
                name={"name"}
                value={data.name}
                onChange={handleChange}
                error={validationErrors.name}
            />
            {authError && <p className="text-danger">{getErrorMessage(authError)}</p>}
            {isAuthProcessing && <p className="text-info">Запрос обрабатывается...</p>}
            <SubmitButton title={"Зарегестрироваться"} />
        </form>
    );
};

export default RegistrationForm;
