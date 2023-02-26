import PropTypes from "prop-types";
import { addMonth, reduceMonth, getStringMonth, getEnd } from "../lib";
import { LeftArrowIcon, RightArrowIcon } from "../../../shared";

const ChangeMonth = ({ startDate, endDate, setStartDate, setEndDate }) => {
    const setNextMonth = () => {
        if (new Date(endDate).getFullYear() === new Date(getEnd()).getFullYear()) {
            if (new Date(endDate).getMonth() < new Date(getEnd()).getMonth()) {
                setStartDate((prevState) => addMonth(prevState));
                setEndDate((prevState) => addMonth(prevState));
            }
        } else if (new Date(endDate).getFullYear() < new Date(getEnd()).getFullYear()) {
            setStartDate((prevState) => addMonth(prevState));
            setEndDate((prevState) => addMonth(prevState));
        }
    };

    const setPrevMonth = () => {
        setStartDate((prevState) => reduceMonth(prevState));
        setEndDate((prevState) => reduceMonth(prevState));
    };

    const currentMonth = getStringMonth(new Date(startDate));
    return (
        <div className="w-full flex flex-row">
            <div
                role={"presentation"}
                className="w-5 relative rounded-lg cursor-pointer hover:bg-gray-200"
                onClick={setPrevMonth}
            >
                <div className="w-3 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] ">
                    <LeftArrowIcon />
                </div>
            </div>
            <div className="grow text-center">
                <h1 className="text-2xl px-1">{currentMonth}</h1>
            </div>
            <div
                role={"presentation"}
                className="w-5 relative cursor-pointer rounded-lg hover:bg-gray-200"
                onClick={setNextMonth}
            >
                <div className="w-3 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
                    <RightArrowIcon />
                </div>
            </div>
        </div>
    );
};

ChangeMonth.propTypes = {
    startDate: PropTypes.number,
    endDate: PropTypes.number,
    setStartDate: PropTypes.func,
    setEndDate: PropTypes.func,
};

export default ChangeMonth;
