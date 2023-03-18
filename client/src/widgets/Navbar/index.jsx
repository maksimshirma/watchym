import PropTypes from "prop-types";
import { Navigation, LayoutNavbar } from "../../shared";
import { useSelector } from "react-redux";
import { userModel, UserNavProfile, UserEditProfileIcon } from "../../entities";
import { changeRoutesWithIsLoggedIn } from "./lib";
import { Link } from "react-router-dom";
import { EditUserForm, useModal } from "../../features";

const Navbar = ({ routes }) => {
    const isLoggedIn = useSelector(userModel.getIsLoggedIn());
    const navLinks = changeRoutesWithIsLoggedIn(routes, isLoggedIn);
    const { openModal } = useModal();
    return (
        <>
            {isLoggedIn && (
                <LayoutNavbar>
                    <div className="flex py-2 items-center">
                        <div className="w-1/4">WYR</div>
                        <div className="grow">
                            <div className="w-full sm:w-2/3  mx-auto">
                                <Navigation routes={navLinks} />
                            </div>
                        </div>
                        <div className="w-1/4 flex justify-end items-center">
                            <UserNavProfile />
                            <div className="ml-2" role={"presentation"} onClick={() => openModal(<EditUserForm />)}>
                                <UserEditProfileIcon />
                            </div>
                            <Link
                                className="ml-2 px-2 border-[1px] bg-slate-200 border-black hover:bg-slate-300 transition-all"
                                to={routes.signOut.path}
                            >
                                {routes.signOut.title}
                            </Link>
                        </div>
                    </div>
                </LayoutNavbar>
            )}
        </>
    );
};

Navbar.propTypes = {
    routes: PropTypes.object,
};

export default Navbar;
