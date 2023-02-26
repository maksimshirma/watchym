import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesModel } from "../../model";

const CategoriesLoader = ({ children }) => {
    const dispatch = useDispatch();
    const dataStatus = useSelector(categoriesModel.getCategoriesDataStatus());
    useEffect(() => {
        if (!dataStatus) {
            dispatch(categoriesModel.loadCategoriesList());
        }
    }, [dispatch, dataStatus]);
    return children;
};

CategoriesLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default CategoriesLoader;
