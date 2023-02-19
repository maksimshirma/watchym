import PropTypes from "prop-types";

const LayoutNavbar = ({ children }) => {
    return (
        <div className="w-full bg-gray-300 max-h-14">
            <div className="w-4/5 mx-auto">{children}</div>
        </div>
    );
};

LayoutNavbar.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default LayoutNavbar;
