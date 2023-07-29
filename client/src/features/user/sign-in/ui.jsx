import { TextField, PasswordField, SubmitButton, useForm } from "../../../shared";
import { useDispatch, useSelector } from "react-redux";
import { userModel } from "../../../entities";
import { getErrorMessage } from "../lib";
import * as yup from "yup";

const AuthorizationForm = () => {
    const dispatch = useDispatch();
    const authError = useSelector(userModel.getAuthError());
    const isAuthProcessing = useSelector(userModel.getAuthProcessing());

    const initialData = {
        email: "",
        password: "",
    };

    const validationSchema = yup.object().shape({
        email: yup.string().required("Электронная почта обязательна для заполнения").email("Email введён некорректно"),
        password: yup.string().required("Пароль обязателен для заполнения").min(8, "Должно быть не менее 8 символов"),
    });

    const { data, validationErrors, isValid, handleChange } = useForm(validationSchema, initialData);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            dispatch(userModel.signIn(data));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                type={"text"}
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
            {authError && <p className="text-danger">{getErrorMessage(authError)}</p>}
            {isAuthProcessing && <p className="text-info">Запрос обрабатывается...</p>}
            <SubmitButton title={"Войти"} />
        </form>
    );
};

export default AuthorizationForm;
