import PropTypes from "prop-types";
import { Menu, Item } from "./ui";
import { nanoid } from "nanoid";

const DropdownMenu = ({ items }) => {
    return (
        <Menu>
            {items.map((item) => (
                <Item key={nanoid()}>{item.element}</Item>
            ))}
        </Menu>
    );
};

DropdownMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

export default DropdownMenu;
