import React from "react";
import PropTypes from "prop-types";

const SelectField = ({ label, name, value, onChange, options, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const getClasses = error ? " is-invalid" : "";

    const convertedOptions =
        options[0].label && options[0].value
            ? options
            : options.map((option) => ({ label: option.name, value: option._id }));

    const convertedValue = value
        ? value.label && value.value
            ? value
            : { label: value.name, value: value._id }
        : null;

    return (
        <div className="w-full mb-3">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <select
                className={`form-select ${getClasses}`}
                id={name}
                name={name}
                onChange={handleChange}
                defaultValue={convertedValue ? convertedValue.value : "DEFAULT"}
            >
                {!convertedValue && (
                    <option disabled value="DEFAULT">
                        Выберите...
                    </option>
                )}
                {convertedOptions &&
                    convertedOptions.map((option) => (
                        <option key={option.value} value={option.value} name={option.label}>
                            {option.label}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.object,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string,
};

export default React.memo(SelectField);
