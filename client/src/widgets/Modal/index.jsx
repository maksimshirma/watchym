import "./index.scss";
import PropTypes from "prop-types";
import { useModal } from "../../features";
import { CloseModalIcon } from "../../shared";

const Modal = () => {
    const { closeModal, isOpen, component } = useModal();
    return (
        <div role="presentation" className={isOpen ? "my-modal active" : "my-modal"}>
            <div className={isOpen ? "my-modal__content active" : "my-modal__content"}>
                <CloseModalIcon onClose={closeModal} />
                <div className="w-full h-fit">{component && component}</div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    component: PropTypes.element,
};

export default Modal;
