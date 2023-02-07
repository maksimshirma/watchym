import PropTypes from "prop-types";

const PageHeader = ({ text }) => {
    return (
        <div className="m-2 border-b-2 border-[#e5e7eb]">
            <h1 className="text-2xl">{text}</h1>
        </div>
    );
};

PageHeader.propTypes = {
    text: PropTypes.string,
};

export default PageHeader;
