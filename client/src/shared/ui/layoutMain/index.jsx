import PropTypes from "prop-types";

const LayoutMain = ({ children, ...props }) => {
    return (
        <div className="h-full grow px-1" style={{ ...props }}>
            <div className="w-full h-full bg-slate-100 rounded-xl shadow-sm">{children}</div>
        </div>
    );
};

LayoutMain.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default LayoutMain;
