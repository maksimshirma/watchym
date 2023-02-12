import PropTypes from "prop-types";
import { LayoutNavbar, NavLinks } from "../../shared";
import { useSelector } from "react-redux";
import { getIsLoggedIn, UserNavProfile } from "../../entities";
import { changeRoutesWithIsLoggedIn } from "./lib";

const Navbar = ({ routes }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const navLinks = changeRoutesWithIsLoggedIn(routes, isLoggedIn);
    return (
        <LayoutNavbar>
            {isLoggedIn ? (
                <>
                    <div className="flex-auto w-1/4">Logo</div>
                    <div className="flex-auto w-1/2">
                        <NavLinks routes={navLinks} />
                    </div>
                    <div className="flex-auto w-1/4">
                        <UserNavProfile routes={[routes.settings, routes.signOut]} />
                    </div>
                </>
            ) : (
                <div className="flex-auto">Logo</div>
            )}
        </LayoutNavbar>
    );
};

Navbar.propTypes = {
    routes: PropTypes.object,
};

export default Navbar;
