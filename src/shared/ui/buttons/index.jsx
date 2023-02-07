import PropTypes from "prop-types";
import Button from "../button/index.jsx";

const Buttons = ({ options }) => {
    return (
        <div>
            {options &&
                options.map((option) => (
                    <Button
                        key={option.title}
                        title={option.title}
                        onClick={option.onClick}
                    />
                ))}
        </div>
    );
};

Buttons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
};

export default Buttons;
