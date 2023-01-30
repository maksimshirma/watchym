import PropTypes from "prop-types";

const LayoutHeader = ({ children }) => {
    return (
        <div className="w-full bg-white rounded-b-xl">
            <div className="flex p-2 ">{children}</div>
        </div>
    );
};

LayoutHeader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default LayoutHeader;
