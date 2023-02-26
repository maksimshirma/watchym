import PropTypes from "prop-types";
import { formateAmount, getFractionalPart, getIntegerPart } from "../../lib";

const FormatedAmount = ({ amount }) => {
    if (amount) {
        const formatedAmount = formateAmount(amount);
        const fractionalPart = getFractionalPart(formatedAmount);
        const integerPart = getIntegerPart(formatedAmount);
        return (
            <div className="flex flex-row">
                <p className="text-black">{integerPart}</p>
                <p className="text-gray-500">{fractionalPart} Руб.</p>
            </div>
        );
    }
    return (
        <div className="flex flex-row">
            <p className="text-black">0</p>
            <p className="text-gray-500">{",00"} Руб.</p>
        </div>
    );
};

FormatedAmount.propTypes = {
    amount: PropTypes.number,
};

export default FormatedAmount;
