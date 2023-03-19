import { useSelector } from "react-redux";
import { userModel } from "../../model";
import { PageHeader } from "../../../../shared";

const UserCard = ({ ...props }) => {
    const user = useSelector(userModel.getUser());
    const userDataStatus = useSelector(userModel.getUserDataStatus());
    return (
        <div className="flex flex-col" style={{ ...props }}>
            <PageHeader>Личная информация</PageHeader>
            <div className="w-full text-sm sm:text-lg lg:text-xl mt-3">
                {userDataStatus ? user.name : "..."}
                <br />
                {userDataStatus ? user.email : "..."}
            </div>
        </div>
    );
};

export default UserCard;
