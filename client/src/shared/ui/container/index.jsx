import PropTypes from "prop-types";

const Container = ({ children }) => {
    return <div className="w-full sm:w-4/5 h-[100vh] relative mx-auto flex flex-col">{children}</div>;
};

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Container;
