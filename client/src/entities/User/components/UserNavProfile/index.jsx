import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { userModel } from "../../model";
import { useSelector } from "react-redux";

const UserNavProfile = ({ route }) => {
    const user = useSelector(userModel.getUser());
    const dataStatus = useSelector(userModel.getUserDataStatus());
    if (dataStatus) {
        return (
            <div>
                <div className="text-sm grid justify-items-end ">
                    <div className="flex items-center">
                        <div className="w-fit    cursor-pointer">{user.name}</div>
                        <Link
                            className="ml-2 px-2 border-[1px] border-black hover:bg-gray-200 transition-all"
                            to={route.path}
                        >
                            {route.title}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    return "Loading...";
};

UserNavProfile.propTypes = {
    route: PropTypes.object,
};

export default UserNavProfile;
