import PropTypes from "prop-types";
import { useDate } from "../lib";
import { LeftArrowIcon, RightArrowIcon } from "../../../shared";

const ChangeMonth = ({ startDate, setPrevMonth, setNextMonth, ...props }) => {
    const { getStringMonth } = useDate();
    const currentMonth = getStringMonth(new Date(startDate));
    return (
        <div className="w-full flex flex-row" style={{ ...props }}>
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
                <h1 className="text-lg lg:text-2xl px-1">{currentMonth}</h1>
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
    setPrevMonth: PropTypes.func,
    setNextMonth: PropTypes.func,
};

export default ChangeMonth;
