import PropTypes from "prop-types";

const LayoutNavbar = ({ children }) => {
    return (
        <div className="w-full h-20 flex items-center bg-slate-100 rounded-b-3xl mb-4 shadow-lg">
            <div className="w-11/12 mx-auto">{children}</div>
        </div>
    );
};

LayoutNavbar.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default LayoutNavbar;
