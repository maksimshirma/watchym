import PropTypes from "prop-types";
import RouterWrapper from "./with-router.jsx";
import StrictModeWrapper from "./with-strict-mode.jsx";
import StoreWrapper from "./with-store.jsx";
import AppLoaderWrapper from "./with-app-loader.jsx";
import ModalWrapper from "./with-modal.jsx";

const ProvidersWrapper = ({ children }) => {
    return (
        <StoreWrapper>
            <AppLoaderWrapper>
                <RouterWrapper>
                    <StrictModeWrapper>
                        <ModalWrapper>{children}</ModalWrapper>
                    </StrictModeWrapper>
                </RouterWrapper>
            </AppLoaderWrapper>
        </StoreWrapper>
    );
};

ProvidersWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ProvidersWrapper;
