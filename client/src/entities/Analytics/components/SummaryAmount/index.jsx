import PropTypes from "prop-types";
import { FormatedAmount } from "../../../../shared";

const SummaryAmount = ({ sum, title, ...props }) => {
    return (
        <div className="w-full flex flex-row" style={{ ...props }}>
            <div className="text-xl">{title}</div>
            <div className="grow flex justify-end text-lg">
                <div className="w-fit">
                    <FormatedAmount amount={sum} />
                </div>
            </div>
        </div>
    );
};

SummaryAmount.propTypes = {
    sum: PropTypes.number,
    title: PropTypes.string,
};

export default SummaryAmount;
