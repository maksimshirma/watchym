import { useState, useEffect } from "react";
import { TextField, SubmitButton, Button } from "../../../shared";
import { useDispatch, useSelector } from "react-redux";
import { userModel } from "../../../entities";
import { parseYupError } from "../../lib";
import { modalModel } from "../../../features";
import * as yup from "yup";

const EditUserForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(userModel.getUser());

    const [data, setData] = useState({
        name: user ? user.name : "",
    });

    const [errors, setErrors] = useState({});

    const isValid = Object.keys(errors).length === 0;

    const handleChange = ({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            const newData = {
                ...user,
                name: data.name,
            };
            dispatch(userModel.updateUser(newData));
            dispatch(modalModel.handleCloseModal());
        }
    };

    const handleCancel = () => {
        dispatch(modalModel.handleCloseModal());
    };

    const validationSchema = yup.object().shape({
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
                label={"Ваше имя:"}
                name={"name"}
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <div className="w-full flex flex-row">
                <div className="flex-auto text-center">
                    <SubmitButton title={"Принять"} />
                </div>
                <div className="flex-auto text-center">
                    <Button title={"Отмена"} onClick={handleCancel} />
                </div>
            </div>
        </form>
    );
};

export default EditUserForm;
