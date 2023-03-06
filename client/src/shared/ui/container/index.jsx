import PropTypes from "prop-types";

const Container = ({ children }) => {
    return <div className="w-full sm:w-11/12 sm:mx-auto h-[100vh] flex flex-col">{children}</div>;
};

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Container;
