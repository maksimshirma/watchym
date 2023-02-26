import PropTypes from "prop-types";
import CloseIcon from "../close.icon";

const CloseModalIcon = ({ onClose }) => (
    <div className="w-full grid justify-items-end">
        <button className="w-6 h-6" onClick={onClose}>
            <CloseIcon />
        </button>
    </div>
);

CloseModalIcon.propTypes = {
    onClose: PropTypes.func,
};

export default CloseModalIcon;
