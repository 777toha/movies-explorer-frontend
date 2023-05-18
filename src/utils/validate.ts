import React, { useCallback } from "react";
import {InterfaceValues, InterfaceErrors} from '../interface/interfaceForm';

//хук управления формой
export function useForm() {
    const [values, setValues] = React.useState<InterfaceValues>({});

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues((prev) => ({ ...prev, [name]: value }));
    }, [values, setValues]);

    return { values, handleChange, setValues };
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
    const [values, setValues] = React.useState<InterfaceValues>({});
    const [errors, setErrors] = React.useState<InterfaceErrors>({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLFormElement & HTMLInputElement>): void => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: target.validationMessage }));
        const closestForm = target.closest("form");
        if (closestForm !== null) {
            setIsValid(closestForm.checkValidity());
        }
    }, []);

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm };
}