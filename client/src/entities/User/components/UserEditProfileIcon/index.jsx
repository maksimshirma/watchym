import { EditUserIcon } from "../../../../shared";

const UserEditProfileIcon = ({ ...props }) => {
    return (
        <div
            role={"presentation"}
            className="w-8 h-8 rounded-full bg-slate-200 flex justify-center items-center hover:bg-slate-300 cursor-pointer transition-all"
            style={{ ...props }}
        >
            <div className="w-5">
                <EditUserIcon />
            </div>
        </div>
    );
};

export default UserEditProfileIcon;
