import PropTypes from "prop-types";

const GraphBar = ({ sideSum, mainSum, color, ...props }) => {
    const width = mainSum !== 0 ? (sideSum / mainSum) * 100 : 0;
    return (
        <div className="w-full h-5 bg-slate-400 rounded-lg" style={{ ...props }}>
            <div className="h-full rounded-lg" style={{ width: `${width}%`, background: `${color}` }}></div>
        </div>
    );
};

GraphBar.propTypes = {
    sideSum: PropTypes.number,
    mainSum: PropTypes.number,
    color: PropTypes.string,
};

export default GraphBar;
