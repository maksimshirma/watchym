import PropTypes from "prop-types";

const Container = ({ children }) => {
    return <div className="w-full h-[100vh] flex flex-col">{children}</div>;
};

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Container;
