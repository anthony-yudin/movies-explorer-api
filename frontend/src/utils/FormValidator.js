import React from 'react';

function FormValidator (initValues, initErrors, fn) {
  const [values, setValues] = React.useState(initValues);
  const [errors, setErrors] = React.useState(initErrors);
  const [isValid, setIsValid] = React.useState(false);

  function handleChangeInput(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    fn(values);
  }

  return { values, errors, isValid, handleChangeInput, handleSubmit };
}

export default FormValidator;
