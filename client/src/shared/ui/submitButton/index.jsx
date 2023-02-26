import PropTypes from "prop-types";

const SubmitButton = ({ title }) => {
    return (
        <button
            className="h-7 px-4 align-middle bg-[#e5e7eb] hover:bg-[#97989b] duration-100 rounded-xl text-xs sm:text-sm lg:text-base"
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
