import * as yup from "yup";

export const validationSchema = yup.object().shape({
    name: yup.string().required("Обязаятельное поле").max(10, "Максимальное число символов 10"),
    number: yup.string().required("Обязаятельное поле").length(16, "Необходимое число символов - 16"),
    amount: yup.string().required("Обязаятельное поле").max(10, "Максимальное число символов - 10"),
});
