import { UserIcon } from "../../../../shared";

const UserNavProfile = ({ ...props }) => {
    return (
        <div className="w-48 h-48 rounded-full bg-slate-200 flex justify-center items-center" style={{ ...props }}>
            <div className="w-32">
                <UserIcon />
            </div>
        </div>
    );
};

export default UserNavProfile;
