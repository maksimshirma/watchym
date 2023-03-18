import { useState } from "react";

export const useDate = () => {
    const getEnd = () => {
        const end = new Date();
        const endMonth = end.getMonth();
        end.setDate(1);
        end.setMonth((endMonth + 1) % 12);
        end.setHours(0);
        end.setMinutes(0);
        end.setMilliseconds(0);
        return end.getTime();
    };

    const getStart = () => {
        const start = new Date();
        start.setDate(1);
        start.setHours(0);
        start.setMinutes(0);
        start.setMilliseconds(0);
        return start.getTime();
    };

    const addMonth = (date) => {
        const newDate = new Date(date);
        const month = Number(newDate.getMonth());
        if (month === 11) {
            const year = Number(newDate.getFullYear());
            newDate.setFullYear(year + 1);
        }
        newDate.setMonth((month + 1) % 12);
        return newDate.getTime();
    };

    const reduceMonth = (date) => {
        const newDate = new Date(date);
        const month = Number(newDate.getMonth());
        if (month === 0) {
            const year = Number(newDate.getFullYear());
            newDate.setFullYear(year - 1);
        }
        newDate.setMonth((month + 11) % 12);
        return newDate.getTime();
    };

    const [startDate, setStartDate] = useState(getStart());
    const [endDate, setEndDate] = useState(getEnd());

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

    const getStringMonth = (date) => {
        const currentMonth = new Date(date).getMonth();
        //prettier-ignore
        switch (currentMonth) {
        case 0:
            return "Январь";
        case 1:
            return "Февраль";
        case 2:
            return "Март";
        case 3:
            return "Апрель";
        case 4:
            return "Май";
        case 5:
            return "Июнь";
        case 6:
            return "Июль";
        case 7:
            return "Август";
        case 8:
            return "Сентябрь";
        case 9:
            return "Октябрь";
        case 10:
            return "Ноябрь";
        case 11:
            return "Декабрь";
        }
    };

    const filterByDate = (options, startDate, endDate) => {
        return options.filter((operation) => operation.date >= startDate && operation.date < endDate);
    };

    return {
        startDate,
        endDate,
        setNextMonth,
        setPrevMonth,
        getStringMonth,
        filterByDate,
    };
};
