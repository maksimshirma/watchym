import PropTypes from "prop-types";

const Item = ({ children, onClick }) => {
    return (
        <div className="z-10 relative">
            <button className="w-full" onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

Item.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    onClick: PropTypes.func,
};

export default Item;
