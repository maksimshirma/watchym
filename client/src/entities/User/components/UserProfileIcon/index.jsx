import PropTypes from "prop-types";
import { UserIcon } from "../../../../shared";

const UserProfileIcon = ({ image, ...props }) => {
    return (
        <div className="w-48 h-48 rounded-full bg-slate-200 flex justify-center items-center" style={{ ...props }}>
            <div className="w-32 h-32">{image ? <img src={image} alt="" /> : <UserIcon />}</div>
        </div>
    );
};

UserProfileIcon.propTypes = {
    image: PropTypes.string,
};

export default UserProfileIcon;
