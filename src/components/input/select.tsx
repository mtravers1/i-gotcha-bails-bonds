import React, { useState, useEffect, FC, useMemo } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import styles from './style.module.scss';
// import { stringSearch } from 'helpers';

interface SelectProps {
  name: string;
  label?: {
    id?: string;
    defaultMessage: string;
    position?: 'right' | 'left' | 'middle' | 'inline' | 'bottom';
  };
  inputs: { name: string; value: string }[];
  handleSelect?: (e: any) => void;
  required: boolean;
  value?: string;
  useSearch?: boolean;
  useArrow?: boolean;
  attr?: any;
  errorMsg?: { id?: string; defaultMessage: string };
  valErrorMsg?: { id?: string; defaultMessage: string };
  validateSelf?: boolean;
  errors?: any;
  formType?: boolean;
  className?: string;
}

export const Select: FC<SelectProps> = ({
  name,
  inputs,
  label,
  handleSelect = () => {
    return;
  },
  required,
  value = '',
  useSearch = false,
  useArrow = true,
  attr = {},
  errorMsg,
  errors,
  formType,
  className = '',
}) => {
  const [errorMessage, setErrorMessage] = useState(errorMsg);
  const [openDrop, setOpenDrop] = useState(false);
  const [presentValue, setPresentValue] = useState(value);
  const [presentText, setPresentText] = useState('');
  const [innerInputs, setInnerInputs] = useState([
    { name: 'Default', value: '' },
    ...inputs,
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const intl = useIntl();

  const selectRef = React.createRef<any>();
  const parent = React.createRef<any>();
  const inputCon = React.createRef<any>();

  const error = useMemo(
    () => (typeof errors?.[name] !== 'string' && errors?.[name] ? true : false),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors?.[name]]
  );
  const submitted = useMemo(() => errors?.onSubmit, [errors?.onSubmit]);

  useEffect(() => {
    const val = innerInputs.find((input) => input.value === value);

    setPresentValue(value);
    setPresentText(`${val ? val.name : ''}`);
  }, [label, required, innerInputs, value]);

  useEffect(() => {
    setInnerInputs([{ name: 'Default', value: '' }, ...inputs]);
  }, [inputs]);

  useEffect(() => {
    if (error) {
      inputCon?.current?.classList.add(styles.invalid);
      inputCon?.current?.classList.remove(styles.valid);
      setErrorMessage(errorMsg);
    } else {
      inputCon?.current?.classList.remove(styles.invalid);
      setErrorMessage(undefined);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, submitted, errors?.reset]);

  const handleClick = (name: string, value: any, current_name: string) => {
    setPresentValue(value);
    setPresentText(current_name);
    setOpenDrop(false);
    const target = { name, value };
    handleSelect({ target });
    inputCon?.current?.classList.add(styles.valid);
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const revileDropDown = () => {
    if (attr.disabled) return;
    setOpenDrop(!openDrop);

    inputCon?.current?.classList.add(styles.typing);
  };

  const close = (e: any) => {
    const leavingParent = !parent.current.contains(e.relatedTarget);

    if (leavingParent) {
      // if (presentValue) return;
      setOpenDrop(false);
    }
  };

  const options = innerInputs.map((input, i) => (
    <button
      className={classNames(
        styles.options,
        'block w-full p-2.5 rounded-sm text-left text-txt',
        {
          [styles.selected]: input.value === presentValue,
        }
      )}
      type="button"
      key={i}
      value={input.value}
      onClick={() => handleClick(name, input.value, input.name)}
    >
      {input.name}
    </button>
  ));

  return (
    <div
      className={classNames(styles['input-div'], styles['select_op'], {
        [className]: className,
      })}
      onBlur={close}
      tabIndex={-1}
      ref={parent}
      {...attr}
    >
      <div
        className={classNames(styles.input, {
          'flex items-end': label?.position === 'inline',
          'flex flex-col':
            label?.position === 'middle' || label?.position === 'left',
          'flex flex-col-reverse': label?.position === 'bottom',
        })}
      >
        {label && (
          <label
            className={classNames('mb-1 block', {
              'self-center':
                label?.position === 'middle' || label?.position === 'bottom',
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
          style={{ zIndex: openDrop ? 100 : 0 }}
          ref={inputCon}
        >
          {/* <div className="input-type"> */}
          <div
            className={classNames(
              styles.select,
              styles['input-type'],
              'relative z-0',
              {
                [styles['open-drop']]: openDrop || presentValue !== '',
              }
            )}
            ref={selectRef}
            tabIndex={-1}
          >
            <button
              className={classNames(
                styles.currentValue,
                'flex justify-between items-center w-full text-left pr-8',
                {
                  [styles.arrow]: useArrow,
                  [styles['open-drop']]: openDrop,
                }
              )}
              type="button"
              onClick={revileDropDown}
            >
              {openDrop || presentValue ? <p>{presentText}</p> : <p />}
            </button>
            <div
              className={classNames(
                styles.dropDownButtons,
                'absolute bg-white shadow w-full text-txt overflow-scroll opacity-0 invisible top-0 mt-5 left-0 ml-5 z-10 rounded-sm',
                {
                  [styles['open-drop']]: openDrop,
                  [styles.close]: !openDrop,
                }
              )}
            >
              {useSearch ? (
                <div
                  className={classNames(
                    styles['search-input'],
                    'w-full border border-txt-lit mb-1.5 rounded-sm p-2.5 sticky top-2 mt-2 bg-white'
                  )}
                >
                  <input
                    className="border-none"
                    type="text"
                    placeholder="search"
                    onChange={handleChange}
                    value={searchQuery}
                  />
                </div>
              ) : null}
              {options}
            </div>
            {/* </div> */}
          </div>

          <span className={styles.elspans}></span>
        </div>
      </div>
      {errorMessage && (
        <p
          className={classNames(
            styles.error,
            'mr-2.5 text-red-500 text-xs text-center'
          )}
          style={{
            display: error ? 'block' : 'none',
          }}
        >
          {intl.formatMessage({
            id: errorMessage?.id,
            defaultMessage: errorMessage?.defaultMessage,
          })}
        </p>
      )}
    </div>
  );
};
