import PropTypes from "prop-types";
import RouterWrapper from "./with-router.jsx";
import StrictModeWrapper from "./with-strict-mode.jsx";
import StoreWrapper from "./with-store.jsx";

const ProvidersWrapper = ({ children }) => {
    return (
        <StoreWrapper>
            <RouterWrapper>
                <StrictModeWrapper>{children}</StrictModeWrapper>
            </RouterWrapper>
        </StoreWrapper>
    );
};

ProvidersWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default ProvidersWrapper;
