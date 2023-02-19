import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { userModel } from "../../model";
import { useSelector } from "react-redux";
import UserIcon from "../UserIcon";
import { DropdownMenu } from "../../../../shared";

const UserNavProfile = ({ routes }) => {
    const user = useSelector(userModel.getUser());
    const dataStatus = useSelector(userModel.getUserDataStatus());
    if (dataStatus) {
        return (
            <DropdownMenu>
                <div className="text-sm grid justify-items-end ">
                    <div className="flex items-center">
                        <div className="mr-2">{user.name}</div>
                        <div className="h-10 w-10">
                            <UserIcon image={user.image} />
                        </div>
                    </div>
                </div>
                {routes.map((route) => (
                    <div
                        key={route.title}
                        className="p-1 bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <Link key={route.title} to={route.path}>
                            {route.title}
                        </Link>
                    </div>
                ))}
            </DropdownMenu>
        );
    }
    return "Loading...";
};

UserNavProfile.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
};

export default UserNavProfile;
