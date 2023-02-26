import { userModel } from "../../model";
import { useSelector } from "react-redux";

const UserNavProfile = () => {
    const user = useSelector(userModel.getUser());
    const dataStatus = useSelector(userModel.getUserDataStatus());
    if (dataStatus) {
        return <div className="w-fit text-sm cursor-pointer">{user.name}</div>;
    }
    return "Loading...";
};

export default UserNavProfile;
