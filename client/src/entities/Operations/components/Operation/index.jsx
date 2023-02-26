import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { accountsModel } from "../../../Account";
import { operationsModel } from "../../../Operations";
import { categoriesModel } from "../../../Categories";
import { FormatedAmount } from "../../../../shared";
import { convertDate } from "../../lib";

const Operation = ({ _id, onEdit }) => {
    const operation = useSelector(operationsModel.getOperationById(_id));
    const { account, amount, type, category } = operation;
    const accountName = useSelector(accountsModel.getAccountById(account))?.name;
    const categoryName = useSelector(categoriesModel.getCategoryById(category))?.name;

    const handleEdit = () => {
        onEdit(_id);
    };

    return (
        <div
            role={"presentation"}
            onClick={handleEdit}
            className="w-full flex items-center text-xs sm:text-sm lg:text-base cursor-pointer hover:bg-slate-100 p-1 hover:rounded-lg transition-all"
        >
            <div className="flex flex-row justify-center items-center">
                <div className="w-12 h-12 rounded-lg bg-orange-200"></div>
                <div className="ml-2">
                    <div className="">{accountName}</div>
                    <div className="text-[12px] text-gray-400">
                        {convertDate(operation.date) + " " + (categoryName ? categoryName : "")}
                    </div>
                </div>
            </div>
            <div className="grow grid justify-items-end pr-1">
                <div className="w-fit flex flex-row">
                    {type === "expense" ? "-" : "+"}
                    <FormatedAmount amount={amount} />
                </div>
            </div>
        </div>
    );
};

Operation.propTypes = {
    _id: PropTypes.string,
    onEdit: PropTypes.func,
};

export default Operation;
