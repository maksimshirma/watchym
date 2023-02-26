import PropTypes from "prop-types";

const LayoutAuthForm = ({ children }) => {
    return (
        <div className="w-full h-full grid justify-items-center content-center">
            <div className="w-1/2 h-fit mb-20">
                <div className="border-[1px] rounded-lg p-10 shadow-xl">{children}</div>
            </div>
        </div>
    );
};

LayoutAuthForm.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default LayoutAuthForm;
