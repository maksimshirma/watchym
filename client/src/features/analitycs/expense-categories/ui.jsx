import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { categoriesModel } from "../../../entities";
import { summaryAmount, getAmountPerCategory } from "../lib";

const ExpenseCategoriesList = ({ operations }) => {
    const categories = useSelector(categoriesModel.getCategoriesList());
    const categoriesDataStatus = useSelector(categoriesModel.getCategoriesDataStatus());
    if (categoriesDataStatus) {
        const sum = summaryAmount(operations);
        const amountPerCategory = getAmountPerCategory(operations, categories);
        return (
            <div className="w-full overflow-y-auto">
                {amountPerCategory &&
                    amountPerCategory.map((item) => {
                        const { name, value } = item;
                        return (
                            <div
                                key={name}
                                className="w-full flex flex-row p-3 hover:rounded-lg hover:bg-slate-200 cursor-pointer transition-all mb-1"
                            >
                                <div className="w-fit">{name}</div>
                                <div className="grow text-right">{((value / sum) * 100).toFixed(0) + "%"}</div>
                            </div>
                        );
                    })}
            </div>
        );
    }
    return "Loading...";
};

ExpenseCategoriesList.propTypes = {
    operations: PropTypes.arrayOf(PropTypes.object),
};

export default ExpenseCategoriesList;
