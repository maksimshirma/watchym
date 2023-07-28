import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type = "text", name, value, onChange, error }) => {
    const getClasses = error ? " is-invalid" : "";

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
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
                    className={`form-control ${getClasses}`}
                    autoComplete="off"
                />
                {error && <div className="invalid-feedback">{error}</div>}
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
