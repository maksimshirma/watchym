import PropTypes from "prop-types";
import { Navigation } from "../../shared";
import { useSelector, useDispatch } from "react-redux";
import { userModel, UserNavProfile } from "../../entities";
import { changeRoutesWithIsLoggedIn } from "./lib";
import { modalModel, EditUserForm } from "../../features";
import { Link } from "react-router-dom";

const Navbar = ({ routes }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(userModel.getIsLoggedIn());
    const navLinks = changeRoutesWithIsLoggedIn(routes, isLoggedIn);
    return (
        <div className="w-full">
            {isLoggedIn ? (
                <div className="flex py-2 items-center">
                    <div className="w-1/4">WYR</div>
                    <div className="grow">
                        <div className="w-full sm:w-2/3  mx-auto">
                            <Navigation routes={navLinks} />
                        </div>
                    </div>
                    <div className="w-1/4 flex justify-end items-center">
                        <div
                            role={"presentation"}
                            onClick={() => dispatch(modalModel.handleOpenModal(<EditUserForm />))}
                        >
                            <UserNavProfile />
                        </div>
                        <Link
                            className="ml-2 px-2 border-[1px] border-black hover:bg-gray-200 transition-all"
                            to={routes.signOut.path}
                        >
                            {routes.signOut.title}
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex-auto">WYR</div>
            )}
        </div>
    );
};

Navbar.propTypes = {
    routes: PropTypes.object,
};

export default Navbar;
