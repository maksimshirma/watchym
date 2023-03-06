import PropTypes from "prop-types";
import { ModalProvider } from "../../features";

const ModalWrapper = ({ children }) => {
    return <ModalProvider>{children}</ModalProvider>;
};

ModalWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ModalWrapper;
