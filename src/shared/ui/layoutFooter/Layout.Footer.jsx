import PropTypes from "prop-types";

const LayoutFooter = ({ children }) => {
    return <div className="w-full bg-white rounded-t-xl">{children}</div>;
};

LayoutFooter.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default LayoutFooter;
