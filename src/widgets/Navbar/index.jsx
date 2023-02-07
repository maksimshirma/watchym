import PropTypes from "prop-types";
import { LayoutNavbar, NavLinks } from "../../shared";

const Navbar = ({ routes }) => {
    return (
        <LayoutNavbar>
            <div className="flex-auto">Logo</div>
            <div className="flex flex-auto">
                <NavLinks routes={routes} />
            </div>
            <div className="flex-auto relative">
                <div className="absolute inset-y-0 right-0">User</div>
            </div>
        </LayoutNavbar>
    );
};

Navbar.propTypes = {
    routes: PropTypes.object,
};

export default Navbar;
