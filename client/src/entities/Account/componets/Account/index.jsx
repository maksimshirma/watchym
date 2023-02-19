import PropTypes from "prop-types";
import { accountsModel } from "../../model";
import { useSelector } from "react-redux";

const Account = ({ _id, onEdit }) => {
    const account = useSelector(accountsModel.getAccountById(_id));
    const { number, name, amount } = account;
    const handleEdit = () => {
        onEdit(_id);
    };
    return (
        <div
            role={"presentation"}
            className="w-full mb-1 flex items-center text-xs sm:text-sm lg:text-base text-left cursor-pointer hover:bg-gray-200 hover:rounded-lg transition-all"
            onClick={handleEdit}
        >
            <div className="w-12 h-10 bg-red-500 rounded-lg text-white text-xs flex justify-center items-end">
                <div className="">{"***" + String(number).slice(16)}</div>
            </div>
            <div className="ml-2">
                <div className="">{name}</div>
                <div className="text-sm flex flex-row">
                    <p>{amount}</p>
                    <p className="ml-1 text-gray-400">Руб.</p>
                </div>
            </div>
        </div>
    );
};

Account.propTypes = {
    _id: PropTypes.string,
    onEdit: PropTypes.func,
};

export default Account;
