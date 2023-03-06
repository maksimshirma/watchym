import PropTypes from "prop-types";

const SubmitButton = ({ title }) => {
    return (
        <button
            className="h-7 px-4 align-middle bg-slate-100 hover:bg-slate-200 border-black border-[1px] rounded-lg duration-100 text-xs sm:text-sm lg:text-base"
            type="submit"
        >
            {title}
        </button>
    );
};

SubmitButton.propTypes = {
    title: PropTypes.string,
};

export default SubmitButton;
