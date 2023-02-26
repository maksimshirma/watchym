import PropTypes from "prop-types";

const Item = ({ children }) => {
    return <div className="z-10 relative">{children}</div>;
};

Item.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Item;
