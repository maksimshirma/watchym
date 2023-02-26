import PropTypes from "prop-types";

const Button = ({ title, onClick }) => {
    return (
        <button
            className="h-7 px-4 align-middle bg-[#e5e7eb] hover:bg-[#97989b] duration-100 rounded-xl text-xs sm:text-sm lg:text-base"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
