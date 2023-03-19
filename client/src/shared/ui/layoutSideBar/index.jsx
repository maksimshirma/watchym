import PropTypes from "prop-types";

const LayoutSideBar = ({ children }) => {
    return (
        <div className="w-1/4 h-full min-w-fit relative">
            <div className="w-full h-full bg-slate-100 rounded-xl shadow-sm">{children}</div>
        </div>
    );
};

LayoutSideBar.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default LayoutSideBar;
