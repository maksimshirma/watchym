import PropTypes from "prop-types";
import Category from "../Category";

const CategoriesList = ({ sum, amountPerCategory, ...props }) => {
    return (
        <div className="w-full overflow-y-auto" style={{ ...props }}>
            {amountPerCategory &&
                amountPerCategory.map((item) => (
                    <Category key={item.name} sum={sum} value={item.value} name={item.name} />
                ))}
        </div>
    );
};

CategoriesList.propTypes = {
    sum: PropTypes.number,
    amountPerCategory: PropTypes.arrayOf(PropTypes.object),
};

export default CategoriesList;
