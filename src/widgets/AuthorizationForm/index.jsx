import { useState } from "react";
import { TextField, Button } from "../../shared";
import { useDispatch } from "react-redux";
import { signIn } from "../../entities";

const AuthorizationForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const handleChange = ({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = () => {
        dispatch(signIn(data));
    };
    return (
        <div>
            <TextField
                type={"text"}
                label={"Введите email..."}
                name={"email"}
                value={data.email}
                onChange={handleChange}
            />
            <TextField
                type={"password"}
                label={"Введите пароль..."}
                name={"password"}
                value={data.password}
                onChange={handleChange}
            />
            <Button className="text-center" title={"Войти"} onClick={handleSubmit} />
        </div>
    );
};

export default AuthorizationForm;
