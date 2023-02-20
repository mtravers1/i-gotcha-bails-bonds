import { useState, SyntheticEvent } from 'react';
import { validate } from 'helpers';

type props = {
  inputs?: any[];
  cb: (args: any) => void;
  validateForm?: boolean;
  initials?: any;
  runOnError?: any;
  showErrorToast?: boolean;
};

interface returnType {
  loading: boolean;
  handleSubmit: (e: SyntheticEvent) => void;
  handleChange: (e: any) => void;
  inputTypes: any;
  errors: any;
  setInputTypes: any;
  resetInputs: (inputs: any) => void;
  handleModChange: (e: any) => void;
}

export const useForm = ({
  inputs,
  cb,
  validateForm = true,
  initials = {},
  runOnError,
}: // showErrorToast = true,
props): returnType => {
  const initialInputs = inputs?.reduce(
    (acc: any, input: any) => ({
      ...acc,
      [input.name]: initials[input.name] ? initials[input.name] : '',
    }),
    {}
  );

  const initialError = inputs?.reduce(
    (acc: any, input: any) => ({
      ...acc,
      [input.name]: initials[input.name] ? false : '',
    }),
    {}
  );

  const inputMap = inputs?.reduce(
    (acc: any, input: any) => ({
      ...acc,
      [input.name]: { ...input, validateSelf: input.validateSelf || true },
    }),
    {}
  );

  const dependentsMap = inputs?.reduce((acc: any, input: any) => {
    if (input.dependent?.name) {
      return {
        ...acc,
        [input.name]: { [input.dependent.name]: input.dependent.value },
      };
    }
    return acc;
  }, {});

  // check if at least one element fails validation
  const shouldNotSubmit = (errorMap: any) =>
    Object.keys(errorMap).some((inputName) => errorMap[inputName]);

  const [loading, setLoading] = useState(false);
  const [inputTypes, setInputTypes] = useState(initialInputs);
  const [errors, setErrors] = useState(initialError);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const requiredKeys = inputs?.reduce((acc: any, input: any) => {
      if (input.required || inputTypes[input.name]) {
        return { ...acc, [input.name]: inputTypes[input.name] };
      }
      return acc;
    }, {});

    // validate forms
    let errorMap: any = {};
    errorMap = Object.keys(requiredKeys).reduce(
      (acc, inputName) => ({
        ...acc,
        [inputName]: inputMap[inputName].validateSelf
          ? !validate(requiredKeys[inputName], inputMap[inputName].pattern)
          : false,
      }),
      {}
    );

    if (!shouldNotSubmit(errorMap) && dependentsMap) {
      errorMap = Object.keys(dependentsMap).reduce(
        (acc: any, dependent: any) => {
          const key = Object.keys(dependentsMap[dependent])[0];
          const val = dependentsMap[dependent][key];
          if (requiredKeys[key] == val && !requiredKeys[dependent]) {
            return {
              ...acc,
              [dependent]: true,
            };
          }
          return acc;
        },
        {}
      );
    }

    setErrors(errorMap);

    if (shouldNotSubmit(errorMap) && validateForm) {
      // you can add a toast here

      errorMap.reset = false;
      errorMap.onSubmit = true;

      return;
    }

    errorMap.onSubmit = true;
    errorMap.reset = false;

    setLoading(true);

    let response;

    try {
      response = await cb(
        Object.keys(inputTypes).reduce(
          (acc, cur) => ({
            ...acc,
            [cur]: inputTypes[cur] ? inputTypes[cur] : undefined,
          }),
          {}
        )
      );

      setLoading(false);
    } catch (error) {
      const actError: any = error;

      if (actError.response) {
        if (actError.response?.status === 500) {
          actError.message = 'Network actError please try again';
        } else
          actError.message =
            actError?.response?.data?.message || actError.message;
      } else actError.message = actError.message || 'actError occured';

      const err = Array.isArray(actError.message)
        ? actError.message.join(', ')
        : actError.message;

      // add a toast or do soemthing with the actError

      runOnError
        ? runOnError?.(error, err)
        : () => {
            return;
          };

      console.log(error);
      setLoading(false);
      return;
    }

    return { msg: 'success', response };
  };

  const handleModChange = (values: any) => {
    setInputTypes({ ...inputTypes, ...values });
  };

  const handleChange = (event: SyntheticEvent<EventTarget>) => {
    event?.preventDefault?.();

    const { name, value, type } = event.target as HTMLInputElement;
    if (inputMap[name].validateSelf) {
      const newErrors = {
        ...errors,
        [name]: !validate(value, inputMap[name].pattern),
      };
      newErrors.onSubmit = false;
      newErrors.reset = false;

      setErrors(newErrors);
    }

    let inputValue: any = '';

    switch (type) {
      case 'checkbox':
        inputValue = !inputTypes[name];
        break;
      default:
        inputValue = value;
    }

    setInputTypes((prevInputs: any) => ({
      ...prevInputs,
      [name]: inputValue,
    }));
  };

  const resetInputs = () => {
    setInputTypes(initialInputs);
    setErrors({ ...initialError, reset: true });
  };

  return {
    handleSubmit,
    handleChange,
    inputTypes,
    errors,
    setInputTypes,
    loading,
    resetInputs,
    handleModChange,
  };
};
