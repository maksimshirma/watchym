import { userModel } from "../../model";
import { useSelector } from "react-redux";
import { Loader, UserIcon } from "../../../../shared";
import { Link } from "react-router-dom";

const UserNavProfile = ({ ...props }) => {
    const dataStatus = useSelector(userModel.getUserDataStatus());
    if (dataStatus) {
        return (
            <div
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer flex justify-center items-center transition-all"
                style={{ ...props }}
            >
                <div className="w-5 h-5">
                    <Link to={"/user"}>
                        <UserIcon />
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div>
            <Loader width={160} height={64} />
        </div>
    );
};

export default UserNavProfile;
