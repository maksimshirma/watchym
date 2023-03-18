import PropTypes from "prop-types";

const Category = ({ sum, value, name }) => {
    return (
        <div className="w-full flex flex-row p-3 hover:rounded-lg hover:bg-slate-200 cursor-pointer transition-all mb-1">
            <div className="w-fit">{name}</div>
            <div className="grow text-right">{((value / sum) * 100).toFixed(0) + "%"}</div>
        </div>
    );
};

Category.propTypes = {
    sum: PropTypes.number,
    value: PropTypes.number,
    name: PropTypes.string,
};

export default Category;
