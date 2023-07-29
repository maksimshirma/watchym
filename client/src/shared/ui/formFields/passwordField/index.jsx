import React, { useState } from "react";
import PropTypes from "prop-types";
import EyeOff from "../../icons/eyeOff.icon";
import Eye from "../../icons/eye.icon";

const PasswordField = ({ label, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isShowError, setShowError] = useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const { name, value } = target;
        onChange({ name, value });
        setShowError(false);
        let max = window.setTimeout(() => {
            return null;
        }, 0);
        while (max--) {
            clearTimeout(max);
        }
        setTimeout(() => {
            setShowError(true);
        }, 1000);
    };

    const handleBlur = () => {
        setShowError(true);
    };

    const handleFocus = () => {
        setShowError(false);
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
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    value={value}
                    className={"form-control" + (isShowError && error ? " is-invalid" : "")}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    autoComplete="off"
                />
                <span className="input-group-text">
                    <div role={"presentation"} onClick={toggleShowPassword} className="h-4 cursor-pointer">
                        {showPassword ? <EyeOff /> : <Eye />}
                    </div>
                </span>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

PasswordField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
};

export default React.memo(PasswordField);
