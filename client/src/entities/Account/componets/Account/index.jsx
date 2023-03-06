import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { accountsModel } from "../../model";
import { FormatedAmount } from "../../../../shared";

const Account = ({ _id, onEdit }) => {
    const account = useSelector(accountsModel.getAccountById(_id));
    const { number, name, amount } = account;
    const handleEdit = () => {
        onEdit(_id);
    };
    return (
        <div
            role={"presentation"}
            className="w-full mb-1 flex items-center text-left cursor-pointer hover:bg-slate-200 hover:rounded-lg p-1 transition-all"
            onClick={handleEdit}
        >
            <div className="w-12 h-10 sm:w-16 sm:h-12 bg-red-500 rounded-lg text-white text-xs sm:text-sm flex justify-center items-end">
                <div>{"***" + String(number).slice(16)}</div>
            </div>
            <div className="ml-2 text-sm sm:text-lg">
                <div>{name}</div>
                <div>
                    <FormatedAmount amount={amount} />
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
