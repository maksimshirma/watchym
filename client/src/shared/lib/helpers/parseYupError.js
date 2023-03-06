export const parseYupError = (yupError) => {
    const { inner } = yupError;
    //prettier-ignore
    return Array.isArray(inner)
        ? inner.reduce((acc, item) => {
            const { path, errors } = item;
            if (!Object.prototype.hasOwnProperty.call(acc, path) && errors.length) {
                acc[path] = errors[0];
            }
            return acc;
        }, {})
        : {};
};
