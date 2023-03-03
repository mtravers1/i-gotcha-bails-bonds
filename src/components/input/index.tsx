import React, { FC, createRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useInputLogic } from './useInputLogic';

interface InputProps {
  type?: string;
  name: string;
  placeholder?: { id?: string; defaultMessage: string };
  value: string;
  errorMsg?: { id?: string; defaultMessage: string };
  valErrorMsg?: { id?: string; defaultMessage: string };
  required?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reviel?: boolean;
  revielPassword?: () => void;
  attr?: any;
  open?: boolean;
  example?: string;
  className?: string;
  errors?: any;
  label?: { id?: string; defaultMessage: string };
}

const Input: FC<InputProps> = ({
  type = 'text',
  name,
  placeholder = { defaultMessage: 'Place Holder' },
  value,
  errorMsg,
  valErrorMsg,
  required = false,
  handleChange = () => {
    return;
  },
  attr = {},
  open = false,
  className = '',
  errors,
  label,
}) => {
  const inputCon = createRef<any>();

  const {
    showPassword,
    revielPassword,
    // errorMessage,
    inputInternalError,
    validateOne,
    error,
    inputType,
  } = useInputLogic({
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
  });

  const inputRef = createRef<any>();

  return (
    <div className={`input-div ${className || 'mb-5 '}`}>
      <div className="input">
        {label && (
          <FormattedMessage id={label.id} defaultMessage={label.defaultMessage}>
            {(msg) => <label className="mb-1 block">{msg}</label>}
          </FormattedMessage>
        )}

        <div className="input-con" ref={inputCon}>
          <FormattedMessage
            id={placeholder?.id}
            defaultMessage={placeholder.defaultMessage}
          >
            {(msg) => (
              <>
                {type === 'textarea' ? (
                  <textarea
                    className="input-type text-area"
                    required={required}
                    name={name}
                    onChange={validateOne}
                    value={value}
                    rows={5}
                    ref={inputRef}
                    placeholder={msg as any}
                  />
                ) : (
                  <>
                    <input
                      className="input-type"
                      type={inputType}
                      required={required}
                      name={name}
                      onChange={validateOne}
                      value={value}
                      ref={inputRef}
                      {...attr}
                      placeholder={msg}
                    />
                  </>
                )}
              </>
            )}
          </FormattedMessage>

          {value && type === 'password' ? (
            <span onClick={revielPassword} className="reviel-password">
              {!showPassword ? <BsEye /> : <BsEyeSlash />}
            </span>
          ) : null}
        </div>

        {errorMsg && (
          <FormattedMessage
            id={errorMsg?.id}
            defaultMessage={errorMsg?.defaultMessage}
          >
            {(msg) => (
              <p
                className="error mr-2.5 text-red-500 text-sm"
                style={{
                  display: error || inputInternalError ? 'block' : 'none',
                }}
              >
                {msg}
              </p>
            )}
          </FormattedMessage>
        )}
      </div>
    </div>
  );
};

export default Input;
