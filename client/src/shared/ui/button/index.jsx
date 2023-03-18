import PropTypes from "prop-types";

const Button = ({ title, onClick, ...params }) => {
    return (
        <button
            className="h-7 px-4 align-middle bg-slate-100 hover:bg-slate-200 border-black border-[1px] rounded-lg duration-100 text-xs sm:text-sm lg:text-base"
            style={{ ...params }}
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
