export const getEnd = () => {
    const end = new Date();
    const endMonth = end.getMonth();
    end.setDate(1);
    end.setMonth((endMonth + 1) % 12);
    end.setHours(0);
    end.setMinutes(0);
    end.setMilliseconds(0);
    return end.getTime();
};
