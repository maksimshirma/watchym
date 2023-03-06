import PropTypes from "prop-types";
import { Navigation, LayoutNavbar } from "../../shared";
import { useSelector } from "react-redux";
import { userModel, UserNavProfile } from "../../entities";
import { changeRoutesWithIsLoggedIn } from "./lib";
import { useModal, EditUserForm } from "../../features";
import { Link } from "react-router-dom";

const Navbar = ({ routes }) => {
    const { openModal } = useModal();
    const isLoggedIn = useSelector(userModel.getIsLoggedIn());
    const navLinks = changeRoutesWithIsLoggedIn(routes, isLoggedIn);
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
                            <div role={"presentation"} onClick={() => openModal(<EditUserForm />)}>
                                <UserNavProfile />
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
