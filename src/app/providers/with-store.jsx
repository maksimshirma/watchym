import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { createStore } from "../store";

const store = createStore();

const StoreWrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

StoreWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default StoreWrapper;
