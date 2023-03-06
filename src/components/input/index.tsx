import React, { FC, createRef } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import styles from './style.module.scss';
import { useInputLogic } from './useInputLogic';

export interface InputProps {
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
  label?: {
    id?: string;
    defaultMessage: string;
    position?: 'right' | 'left' | 'middle' | 'inline';
  };
  formType?: boolean;
}

const Input: FC<InputProps> = ({
  type = 'text',
  name,
  placeholder = { defaultMessage: 'Place holder' },
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
  formType = false,
}) => {
  const inputCon = createRef<any>();
  const intl = useIntl();

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
    <div
      className={classNames(styles['input-div'], {
        [className]: className,
        'mb-5': !className,
      })}
    >
      <div
        className={classNames(styles.input, {
          'flex items-end': label?.position === 'inline',
          'flex flex-col':
            label?.position === 'middle' || label?.position === 'left',
        })}
      >
        {label && (
          <label
            className={classNames('mb-1 block', {
              'self-center': label?.position === 'middle',
              'self-start': label?.position === 'left',
              'text-xs': formType,
              'mr-2 !text-base': label?.position === 'inline',
            })}
          >
            {intl.formatMessage({
              id: label.id,
              defaultMessage: label.defaultMessage,
            })}
          </label>
        )}

        <div
          className={classNames(styles['input-con'], 'flex-1', {
            [styles['input-con__form_type']]: formType,
          })}
          ref={inputCon}
        >
          <>
            {type === 'textarea' ? (
              <textarea
                className={styles['input-type']}
                required={required}
                name={name}
                onChange={validateOne}
                value={value}
                rows={5}
                ref={inputRef}
                placeholder={
                  placeholder?.id
                    ? (intl.formatMessage({
                        id: placeholder?.id,
                        defaultMessage: placeholder.defaultMessage,
                      }) as any)
                    : ''
                }
              />
            ) : (
              <>
                <input
                  className={styles['input-type']}
                  type={inputType}
                  required={required}
                  name={name}
                  onChange={validateOne}
                  value={value}
                  ref={inputRef}
                  {...attr}
                  placeholder={
                    placeholder?.id
                      ? (intl.formatMessage({
                          id: placeholder?.id,
                          defaultMessage: placeholder.defaultMessage,
                        }) as any)
                      : ''
                  }
                />
              </>
            )}
          </>

          <span className={styles.elspans}></span>

          {value && type === 'password' ? (
            <span
              onClick={revielPassword}
              className={styles['reviel-password']}
            >
              {!showPassword ? <BsEye /> : <BsEyeSlash />}
            </span>
          ) : null}
        </div>
      </div>
      {errorMsg && (
        <p
          className={classNames(
            styles.error,
            'mr-2.5 text-red-500 text-xs text-center'
          )}
          style={{
            display: error || inputInternalError ? 'block' : 'none',
          }}
        >
          {intl.formatMessage({
            id: errorMsg?.id,
            defaultMessage: errorMsg?.defaultMessage,
          })}
        </p>
      )}
    </div>
  );
};

export default Input;
