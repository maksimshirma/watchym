import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { userModel } from "../../model";
import { useSelector } from "react-redux";
import UserIcon from "../UserIcon";

const UserNavProfile = ({ routes }) => {
    const user = useSelector(userModel.getUser());
    const dataStatus = useSelector(userModel.getUserDataStatus());
    if (dataStatus) {
        return (
            <div>
                <div className="text-sm grid justify-items-end ">
                    <div className="flex items-center">
                        <Link to={routes[0].path}>
                            <div className="h-10 w-10">
                                <UserIcon image={user.image} />
                            </div>
                        </Link>
                        <Link
                            className="ml-2 px-2 border-[1px] border-black hover:bg-gray-200 transition-all"
                            to={routes[1].path}
                        >
                            {routes[1].title}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    return "Loading...";
};

UserNavProfile.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
};

export default UserNavProfile;
