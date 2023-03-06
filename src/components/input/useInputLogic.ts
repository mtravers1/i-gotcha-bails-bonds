import { useState, useEffect } from 'react';
import styles from './style.module.scss';

interface UseInputProps {
  type: string;
  name: string;
  value: string;
  errorMsg?: { id?: string; defaultMessage: string };
  valErrorMsg?: { id?: string; defaultMessage: string };
  required: boolean;
  handleChange: (event: any, error: any) => void;
  open: boolean;
  errors: any;
  inputCon: any;
}

interface UseInputLogicReturn {
  showPassword: boolean;
  revielPassword: () => void;
  errorMessage: string;
  inputInternalError: boolean | undefined;
  validateOne: (event: any) => void;
  error: any;
  inputType: string;
}

export const useInputLogic = ({
  type,
  name,
  value,
  errorMsg,
  valErrorMsg,
  required,
  handleChange,
  open,
  errors,
  inputCon,
}: UseInputProps): UseInputLogicReturn => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>(errorMsg);
  const [internalValue, setInternalValue] = useState(value);
  const [inputInternalError, setInternalError] = useState<boolean>();
  const [inputType, setInputType] = useState<string>(type);

  const error = errors && errors[name];
  const submitted = errors?.onSubmit;

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    if (internalValue === '' || !internalValue) {
      if (submitted && required) {
        setInternalError(true);
        setErrorMessage(valErrorMsg || errorMsg);
      }

      if (errors?.reset) {
        setInternalError(false);
      }

      inputCon?.current?.classList.remove(styles.typing);
    } else {
      setInternalError(false);
      inputCon?.current?.classList.add(styles.typing);

      if (error) {
        inputCon?.current?.classList.add(styles.invalid);
        inputCon?.current?.classList.remove(styles.valid);
        setErrorMessage(errorMsg);
      } else {
        inputCon?.current?.classList.add(styles.valid);
        inputCon?.current?.classList.remove(styles.invalid);
        setErrorMessage(null);
      }
    }
  }, [
    value,
    inputCon,
    valErrorMsg,
    open,
    error,
    errorMsg,
    name,
    required,
    internalValue,
    submitted,
    errors?.reset,
  ]);

  const revielPassword = () => {
    if (inputType === 'password') {
      setInputType('text');
      setShowPassword(true);
    } else {
      setInputType('password');
      setShowPassword(false);
    }
  };

  function addCommas(x: any) {
    x = x.split(',').join('');

    if (x === '') return '';
    if (!Number(x)) return value;

    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  const validateOne = (event: any) => {
    if (type === 'formattednumber') {
      event.target.value = addCommas(event.target.value);
    }

    handleChange(event, error);
    setInternalValue(event.target.value);
  };

  return {
    showPassword,
    revielPassword,
    errorMessage,
    inputInternalError,
    validateOne,
    error,
    inputType,
  };
};
