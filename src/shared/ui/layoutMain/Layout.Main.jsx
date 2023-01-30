import PropTypes from "prop-types";

const LayoutMain = ({ children }) => {
    return (
        <div className="w-full bg-white rounded-xl my-1 flex-grow">
            {children}
        </div>
    );
};

LayoutMain.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default LayoutMain;
