import { useState, Children } from "react";
import PropTypes from "prop-types";

const Menu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [head, ...tail] = Children.toArray(children);

    return (
        <div
            className="z-0 relative text-center"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {head}
            {isOpen && <div className="absolute top-[100%] w-full">{tail}</div>}
        </div>
    );
};

Menu.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Menu;
