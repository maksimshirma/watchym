import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type = "text", name, value, onChange, error }) => {
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

    return (
        <div className="w-full mb-3">
            <label htmlFor={name}>{label}</label>
            <div className="input-group">
                <input
                    id={name}
                    name={name}
                    type={type}
                    onChange={handleChange}
                    value={value}
                    className={"form-control" + (isShowError && error ? " is-invalid" : "")}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    autoComplete="off"
                />
                {error && isShowError && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes?.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
};

export default React.memo(TextField);
