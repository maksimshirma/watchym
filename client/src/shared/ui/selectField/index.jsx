import PropTypes from "prop-types";

const SelectField = ({ label, name, onChange, defaultOption, options }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const convertedOptions =
        options[0].label && options[0].value
            ? options
            : options.map((option) => ({ label: option.name, value: option._id }));

    return (
        <div className="m-2">
            <label htmlFor={name}>{label}</label>
            <select id={name} name={name} onChange={handleChange}>
                <option>{defaultOption}</option>
                {convertedOptions &&
                    convertedOptions.map((option) => (
                        <option key={option.value} value={option.value} name={option.label}>
                            {option.label}
                        </option>
                    ))}
            </select>
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    defaultOption: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
};

export default SelectField;
