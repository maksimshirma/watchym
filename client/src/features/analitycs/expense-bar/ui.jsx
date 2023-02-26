import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { categoriesModel } from "../../../entities";
import { summaryAmount, getAmountPerCategory } from "../lib";
import { FormatedAmount } from "../../../shared";

const ExpenseBar = ({ operations }) => {
    const categories = useSelector(categoriesModel.getCategoriesList());
    const categoriesDataStatus = useSelector(categoriesModel.getCategoriesDataStatus());
    if (categoriesDataStatus) {
        const sum = summaryAmount(operations);
        const amountPerCategory = getAmountPerCategory(operations, categories);
        return (
            <div className="w-full">
                <div className="w-11/12 mx-auto flex flex-row mb-2">
                    <div className="text-xl">Расходы</div>
                    <div className="grow flex justify-end text-lg">
                        <div className="w-fit">
                            <FormatedAmount amount={sum} />
                        </div>
                    </div>
                </div>
                <div className="w-full grid justify-items-center">
                    <div className="w-11/12 h-5 bg-slate-400 rounded-lg flex flex-row">
                        {amountPerCategory &&
                            amountPerCategory.map((item) => {
                                const width = ((item.value / sum) * 100).toFixed(0);
                                return (
                                    <div
                                        key={item.name}
                                        title={item.name}
                                        className="h-full first:rounded-l-lg last:rounded-r-lg"
                                        style={{ width: `${width}%`, background: `${item.color}` }}
                                    ></div>
                                );
                            })}
                    </div>
                </div>
            </div>
        );
    }
};

ExpenseBar.propTypes = {
    operations: PropTypes.arrayOf(PropTypes.object),
};

export default ExpenseBar;
