import React, { useState, useEffect, FC } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import styles from './style.module.scss';

interface RadioInputProps {
  name: string;
  inputs: { name: string; value: string }[];
  handleSelect: (props: any) => void;
  value: string;
  label?: {
    id?: string;
    defaultMessage: string;
    position?: 'right' | 'left' | 'middle' | 'inline' | 'bottom';
  };
  formType?: boolean;
}

export const RadioInput: FC<RadioInputProps> = ({
  name,
  inputs,
  handleSelect,
  value,
  label,
  formType,
}) => {
  const [presentValue, setPresentValue] = useState(value);
  const intl = useIntl();

  useEffect(() => {
    setPresentValue(value);
  }, [value]);

  const parent = React.createRef<any>();

  const handleClick = (eName: string, eValue: any) => {
    setPresentValue(value);

    handleSelect({ target: { name: eName, value: eValue } });
  };

  const options = inputs.map((input, index) => (
    <button
      className={classNames(styles.rad_options, 'relative pl-6 mr-5 text-txt', {
        [styles.selected]: input.value === presentValue,
      })}
      type="button"
      key={index}
      value={input.value}
      onClick={() => handleClick(name, input.value)}
    >
      {input.name}
    </button>
  ));

  return (
    <div
      className={classNames(
        styles['input-div'],
        styles.radx,
        'w-full relative p-0'
      )}
      ref={parent}
    >
      <div
        className={classNames(styles.input, {
          'flex items-center': label?.position === 'inline',
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
        <div>{options}</div>
      </div>
      <span></span>
    </div>
  );
};
