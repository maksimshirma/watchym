export const filterOperations = (operations, filter) => {
    return operations.filter((operation) => {
        let counter = 0;
        Object.keys(filter).forEach((key) =>
            filter[key] !== "" ? (operation[key] === filter[key] ? (counter += 1) : (counter += 0)) : (counter += 1)
        );
        if (counter === Object.keys(filter).length) {
            return operation;
        }
    });
};
