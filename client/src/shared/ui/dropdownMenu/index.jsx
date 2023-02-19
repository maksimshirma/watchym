import { Children } from "react";
import PropTypes from "prop-types";
import { Menu, Item } from "./ui";

const DropdownMenu = ({ children }) => {
    const items = Children.toArray(children);
    return (
        <Menu>
            {items.map((item, i) => (
                <Item key={i}>{item}</Item>
            ))}
        </Menu>
    );
};

DropdownMenu.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default DropdownMenu;
