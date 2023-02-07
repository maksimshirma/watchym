import PropTypes from "prop-types";

const LayoutNavbar = ({ children }) => {
    return (
        <div className="w-full bg-white rounded-b-xl">
            <div className="flex p-2 ">{children}</div>
        </div>
    );
};

LayoutNavbar.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default LayoutNavbar;
