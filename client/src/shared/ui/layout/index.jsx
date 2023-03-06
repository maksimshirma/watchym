import { Children } from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
    const [first, ...tail] = Children.toArray(children);
    return (
        <div className="w-full h-[calc(100vh-150px)] flex">
            <div className="w-1/4 h-full min-w-fit">{first}</div>
            <div className="grow h-full">{tail}</div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Layout;
