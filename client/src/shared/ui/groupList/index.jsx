import { useState } from "react";
import PropTypes from "prop-types";
import ArrowUpIcon from "../arrowUp.icon";
import ArrowDownIcon from "../arrowDown.icon";
import UncheckedBox from "../uncheckedBox";
import CheckedBox from "../checkedBox";

const GroupList = ({ items, label, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    };
    if (items) {
        return (
            <div className="w-full">
                <button className="flex items-center w-full" onClick={handleClick}>
                    <div className="grow text-left">{label}</div>
                    <div className="w-3 h-3">{isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</div>
                </button>
                {isOpen &&
                    items.map((item, i) => (
                        <div
                            key={item[valueProperty]}
                            className="flex items-center w-full"
                            onClick={() => onItemSelect(item)}
                            role="button"
                            tabIndex={i}
                            onKeyDown={this?.handleClick}
                        >
                            <div className="text-left grow">{item[contentProperty]}</div>
                            <div className="w-3">
                                {selectedItem && selectedItem[contentProperty] === item[contentProperty] ? (
                                    <CheckedBox />
                                ) : (
                                    <UncheckedBox />
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        );
    }
    return null;
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name",
};

GroupList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string,
    valueProperty: PropTypes.string,
    contentProperty: PropTypes.string,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object,
};

export default GroupList;
