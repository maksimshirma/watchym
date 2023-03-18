import { useSelector } from "react-redux";
import { userModel } from "../../model";
import UserProfileIcon from "../UserProfileIcon";

const UserCard = ({ ...props }) => {
    const user = useSelector(userModel.getUser());
    const userDataStatus = useSelector(userModel.getUserDataStatus());
    return (
        <div className="flex flex-col items-center" style={{ ...props }}>
            <div className="mt-10">
                <UserProfileIcon />
            </div>
            <div className="w-1/2 text-xl mt-3">
                Имя: {userDataStatus ? user.name : "..."}
                <br />
                Email: {userDataStatus ? user.email : "..."}
            </div>
        </div>
    );
};

export default UserCard;
