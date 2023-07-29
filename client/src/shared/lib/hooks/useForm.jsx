import { useState, useEffect } from "react";
import { parseYupError } from "../helpers";

export function useForm(validationSchema, initialData) {
    const [data, setData] = useState({ ...initialData });
    const [validationErrors, setValidationErrors] = useState({ ...initialData });
    const [isValid, setValid] = useState(false);

    useEffect(() => {
        validationSchema
            .validate(data, { abortEarly: false })
            .then(() => {
                setValid(true);
                setValidationErrors({ ...initialData });
            })
            .catch((yupError) => {
                setValid(false);
                const errs = { ...initialData, ...parseYupError(yupError) };
                setValidationErrors({ ...errs });
            });
        // eslint-disable-next-line
    }, [data]);

    const handleChange = ({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    return { data, validationErrors, isValid, handleChange };
}
