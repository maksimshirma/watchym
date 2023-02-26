import { Children } from "react";
import PropTypes from "prop-types";

const LayoutMain = ({ children }) => {
    const [first, ...tail] = Children.toArray(children);
    return (
        <div className="w-full sm:w-11/12 grow mx-auto flex items-end ">
            <div className="w-1/6 min-w-fit h-[95%] bg-gray-300 rounded-t-lg">{first}</div>
            <div className="w-2/3 sm:ml-16 h-[95%]">{tail}</div>
        </div>
    );
};

LayoutMain.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default LayoutMain;
