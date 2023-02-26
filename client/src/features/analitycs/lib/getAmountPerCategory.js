export const getAmountPerCategory = (operations, categories) => {
    const object = {};
    operations &&
        operations.forEach((operation) => {
            !Object.prototype.hasOwnProperty.call(object, operation.category)
                ? (object[operation.category] = operation.amount)
                : (object[operation.category] += operation.amount);
        });
    return (
        Object.keys(object) &&
        Object.keys(object).map((key) => {
            const category = categories.find((category) => category._id === key);
            return { name: category.name, value: object[key], color: category.color };
        })
    );
};
