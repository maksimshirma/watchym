import React, { useState } from "react";
import PropTypes from "prop-types";
import EyeOff from "../eyeOff";
import Eye from "../eye";

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    const getClasses = error ? " is-invalid" : "";

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="w-full mb-3">
            <label htmlFor={name}>{label}</label>
            <div className="input-group">
                <input
                    id={name}
                    name={name}
                    type={showPassword ? "text" : type}
                    onChange={handleChange}
                    value={value}
                    className={`form-control ${getClasses}`}
                    autoComplete="off"
                />
                {type === "password" && (
                    <span className="input-group-text">
                        <div role={"presentation"} onClick={toggleShowPassword} className="h-4 cursor-pointer">
                            {showPassword ? <EyeOff /> : <Eye />}
                        </div>
                    </span>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
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
    error: PropTypes.string,
};

export default React.memo(TextField);
