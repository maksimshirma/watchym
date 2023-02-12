import PropTypes from "prop-types";

const UserIcon = ({ image }) => {
    return <img className="h-full w-full rounded-full border-[1px] border-black" src={image} alt="#" />;
};

UserIcon.propTypes = {
    image: PropTypes.string,
};

export default UserIcon;
