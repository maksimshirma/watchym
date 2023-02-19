import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { accountsModel } from "../../../Account";
import { operationsModel } from "../../../Operations";

const Operation = ({ _id, onEdit }) => {
    const operation = useSelector(operationsModel.getOperationById(_id));
    const { account, amount, type } = operation;
    const accountName = useSelector(accountsModel.getAccountById(account))?.name;

    const handleEdit = () => {
        onEdit(_id);
    };

    return (
        <div
            role={"presentation"}
            onClick={handleEdit}
            className="w-full mb-1 flex items-center text-xs sm:text-sm lg:text-base cursor-pointer hover:bg-slate-100 hover:rounded-lg transition-all"
        >
            <div className="flex flex-row justify-center items-center p-1">
                <div className="w-12 h-12 rounded-lg bg-orange-200"></div>
                <div className="ml-2">
                    <div className="">{accountName}</div>
                    <div className="text-[12px] text-gray-400">Транспорт</div>
                </div>
            </div>
            <div className="grow grid justify-items-end pr-1">
                <div className="w-fit">{(type === "expense" ? "-" : "+") + amount} руб.</div>
            </div>
        </div>
    );
};

Operation.propTypes = {
    _id: PropTypes.string,
    onEdit: PropTypes.func,
};

export default Operation;
