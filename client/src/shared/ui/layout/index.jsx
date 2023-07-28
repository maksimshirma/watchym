import { Children } from "react";
import PropTypes from "prop-types";
import LayoutMain from "./layoutMain";
import LayoutSideBar from "./layoutSideBar";
import LayoutAuthForm from "./layoutAuthForm";
import LayoutNavbar from "./layoutNavbar";

const Layout = ({ children }) => {
    const childrenArray = Children.toArray(children);
    const [first, ...tail] = childrenArray;
    return (
        <div className="w-full h-[calc(100vh-150px)] flex">
            {childrenArray.length === 1 && <LayoutMain>{first}</LayoutMain>}
            {childrenArray.length > 1 && (
                <>
                    <LayoutSideBar>{first}</LayoutSideBar>
                    <LayoutMain>{tail}</LayoutMain>
                </>
            )}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Layout.LayoutAuthForm = LayoutAuthForm;
Layout.LayoutSideBar = LayoutSideBar;
Layout.LayoutMain = LayoutMain;
Layout.LayoutNavbar = LayoutNavbar;

export default Layout;
