import { useState } from "react";
import { TextField, Button } from "../../shared";
import { useDispatch } from "react-redux";
import { signUp } from "../../entities";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
    });
    const handleChange = ({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = () => {
        dispatch(signUp(data));
    };
    return (
        <div className="">
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
            <TextField
                type={"text"}
                label={"Введите Ваше имя..."}
                name={"name"}
                value={data.name}
                onChange={handleChange}
            />
            <Button className="text-center" title={"Зарегестрироваться"} onClick={handleSubmit} />
        </div>
    );
};

export default RegistrationForm;
