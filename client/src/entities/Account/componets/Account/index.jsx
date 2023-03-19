import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { accountsModel } from "../../model";
import { FormatedAmount } from "../../../../shared";

const Account = ({ _id, onClick }) => {
    const account = useSelector(accountsModel.getAccountById(_id));
    const { name, amount } = account;
    const handleClick = () => {
        onClick(_id);
    };
    return (
        <div
            role={"presentation"}
            className="w-full mb-1 flex items-center text-left cursor-pointer border hover:bg-slate-200 rounded-lg p-1 transition-all"
            onClick={handleClick}
        >
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
    onClick: PropTypes.func,
};

export default Account;
