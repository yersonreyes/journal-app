import { useEffect, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onReset = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMesage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMesage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    onInputChange,
    onReset,
    ...formValidation,
  };
};
