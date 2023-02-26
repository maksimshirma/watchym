import PropTypes from "prop-types";
import React from "react";

const StrictModeWrapper = ({ children }) => {
    return <React.StrictMode>{children}</React.StrictMode>;
};

StrictModeWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default StrictModeWrapper;
