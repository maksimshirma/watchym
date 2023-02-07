import { useSelector } from "react-redux";
import { getUser, getDataStatus } from "../../model";

const UserIcon = () => {
    const user = useSelector(getUser());
    const dataStatus = useSelector(getDataStatus());
    if (dataStatus) return <img className="h-10 rounded-full border-[1px] border-black" src={user.image} alt="" />;
    return null;
};

export default UserIcon;
