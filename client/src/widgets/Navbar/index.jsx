import PropTypes from "prop-types";
import { Navigation } from "../../shared";
import { useSelector } from "react-redux";
import { userModel, UserNavProfile } from "../../entities";
import { changeRoutesWithIsLoggedIn } from "./lib";

const Navbar = ({ routes }) => {
    const isLoggedIn = useSelector(userModel.getIsLoggedIn());
    const navLinks = changeRoutesWithIsLoggedIn(routes, isLoggedIn);
    return (
        <div className="w-full">
            {isLoggedIn ? (
                <div className="flex py-2 items-center">
                    <div className="w-1/4">Logo</div>
                    <div className="w-1/2">
                        <Navigation routes={navLinks} />
                    </div>
                    <div className="w-1/4">
                        <UserNavProfile routes={[routes.settings, routes.signOut]} />
                    </div>
                </div>
            ) : (
                <div className="flex-auto">Logo</div>
            )}
        </div>
    );
};

Navbar.propTypes = {
    routes: PropTypes.object,
};

export default Navbar;
