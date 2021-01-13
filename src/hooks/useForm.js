import { useState } from 'react';

const validations = {
  empty: {
    regex: /^(?!\s*$).+/,
    message: 'The field cannot be empty',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const validate = (value) => {
    if (!type) return true;
    if (!validations[type].regex.test(value)) {
      setError(validations[type].message);
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
