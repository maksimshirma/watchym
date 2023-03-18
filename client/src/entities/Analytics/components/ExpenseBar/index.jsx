import PropTypes from "prop-types";

const ExpenseBar = ({ sum, amountPerCategory, ...props }) => {
    return (
        <div className="w-full h-5 bg-slate-400 rounded-lg flex flex-row" style={{ ...props }}>
            {amountPerCategory &&
                amountPerCategory.map((item) => {
                    const width = Math.round((item.value / sum) * 1000) / 10;
                    return (
                        <div
                            key={item.name}
                            title={item.name}
                            className="h-full first:rounded-l-lg last:rounded-r-lg last:grow"
                            style={{ width: `${width}%`, background: `${item.color}` }}
                        ></div>
                    );
                })}
        </div>
    );
};

ExpenseBar.propTypes = {
    sum: PropTypes.number,
    amountPerCategory: PropTypes.arrayOf(PropTypes.object),
};

export default ExpenseBar;
