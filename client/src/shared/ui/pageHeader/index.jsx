import PropTypes from "prop-types";

const PageHeader = ({ children }) => {
    return (
        <div className="m-2 border-b-2 border-[#e5e7eb]">
            <h1 className="text-2xl">{children}</h1>
        </div>
    );
};

PageHeader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageHeader;
