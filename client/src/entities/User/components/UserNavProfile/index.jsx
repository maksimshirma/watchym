import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getUser, getUserDataStatus } from "../../model";
import { useSelector } from "react-redux";
import UserIcon from "../UserIcon";
import { DropdownMenu } from "../../../../shared";

const UserNavProfile = ({ routes }) => {
    const user = useSelector(getUser());
    const dataStatus = useSelector(getUserDataStatus());
    if (dataStatus) {
        const formatedRoutes = routes.map((route) => ({
            element: (
                <div
                    key={route.title}
                    className="p-1 bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <Link key={route.title} to={route.path}>
                        {route.title}
                    </Link>
                </div>
            ),
        }));
        const items = [
            {
                element: (
                    <div className="text-sm inline-flex items-center">
                        <div className="mr-2">{user.name}</div>
                        <div className="h-10 w-10">
                            <UserIcon image={user.image} />
                        </div>
                    </div>
                ),
            },
            ...formatedRoutes,
        ];
        return <DropdownMenu items={items} />;
    }
    return "Loading...";
};

UserNavProfile.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
};

export default UserNavProfile;
