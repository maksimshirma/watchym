import PropTypes from "prop-types";
import { LayoutNavbar, NavLinks } from "../../shared";
import { useSelector } from "react-redux";
import { getIsLoggedIn, UserIcon } from "../../entities";
import { changeRoutesWithIsLoggedIn } from "./lib";

const Navbar = ({ routes }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const newRoutes = changeRoutesWithIsLoggedIn(routes, isLoggedIn);
    return (
        <LayoutNavbar>
            {isLoggedIn ? (
                <>
                    <div className="flex-auto">Logo</div>
                    <div className="flex flex-auto">
                        <NavLinks routes={newRoutes} />
                    </div>
                    <div className="flex-auto relative h-10">
                        <div className="absolute right-0">
                            <UserIcon />
                        </div>
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
