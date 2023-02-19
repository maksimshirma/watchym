import { useSelector } from "react-redux";
import { userModel } from "../../model";
import UserIcon from "../UserIcon";

const UserCard = () => {
    const user = useSelector(userModel.getUser());
    return (
        <div className="w-1/4 text-center bg-slate-400 rounded-lg">
            <div className="p-2">
                <div className="bg-white rounded-full">
                    <UserIcon image={user.image} />
                </div>
            </div>
            <div className="xl:text-3xl lg:text-2xl sm:text-lg pb-2">{user.name}</div>
        </div>
    );
};

export default UserCard;
