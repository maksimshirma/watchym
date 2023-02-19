import "./index.scss";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { modalModel } from "../../features";
import { CloseModalIcon } from "../../shared";

const Modal = () => {
    const dispatch = useDispatch();

    const component = useSelector(modalModel.getModalComponent());
    const isOpen = useSelector(modalModel.getIsModalOpen());

    const handleCloseModal = () => {
        dispatch(modalModel.handleCloseModal());
    };

    return (
        <div role="presentation" className={isOpen ? "modal active" : "modal"}>
            <div className={isOpen ? "modal__content active" : "modal__content"}>
                <CloseModalIcon onClose={handleCloseModal} />
                <div className="w-full h-fit">{component && component}</div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    component: PropTypes.element,
};

export default Modal;
