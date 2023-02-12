import { useState } from "react";
import PropTypes from "prop-types";
import EyeOff from "../eyeOff";
import Eye from "../eye";

const TextField = ({ label, type, name, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="m-2">
            <label htmlFor={name}>{label}</label>
            <div className="flex h-6 border-b-2 border-black">
                <input
                    id={name}
                    name={name}
                    className="h-full w-full  outline-none"
                    type={showPassword ? "text" : type}
                    value={value}
                    onChange={handleChange}
                />
                {type === "password" && (
                    <button type="button" onClick={toggleShowPassword}>
                        <div className="h-full">{showPassword ? <EyeOff /> : <Eye />}</div>
                    </button>
                )}
            </div>
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default TextField;
