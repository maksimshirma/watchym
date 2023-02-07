import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";

const RouterWrapper = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};

RouterWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default RouterWrapper;
