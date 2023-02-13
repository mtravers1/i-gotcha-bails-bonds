import { FC, useRef } from 'react';
import classnames from 'classnames';
import styles from './style.module.scss';

interface IDropDown {
  children: any;
  className?: string;
  config?: {
    useClick?: boolean;
    useMobileStyles?: boolean;
    useBackDrop?: boolean;
  };
  dropPosition?: 'left' | 'right';
}

export const DropDown: FC<IDropDown> = (props) => {
  const children = props.children;
  const dropDownRef = useRef<any>();
  const parentRef = useRef<any>();

  const [header, dropdown] = children;

  const handleMouseEnter = () => {
    dropDownRef?.current?.classList.add(styles['cux--drop-down--active']);
  };
  const handleMouseLeave = () => {
    dropDownRef?.current?.classList.remove(styles['cux--drop-down--active']);
  };
  const handleClick = () => {
    dropDownRef?.current?.classList.toggle(styles['cux--drop-down--active']);
  };

  const defaultFunc = () => {
    return;
  };

  const closeDropDown = (e: any) => {
    if (props.config?.useMobileStyles) return;

    const leavingParent = !parentRef?.current.contains(e.relatedTarget);

    if (leavingParent) {
      handleMouseLeave();
    }
  };

  const dropDownMethods = {
    onMouseEnter: props.config?.useClick ? defaultFunc : handleMouseEnter,
    onMouseLeave: props.config?.useClick ? defaultFunc : handleMouseLeave,
    onClick: props.config?.useClick ? handleClick : defaultFunc,
  };

  return (
    <div
      {...dropDownMethods}
      className={styles['cux--drop-down']}
      tabIndex={-1}
      onBlur={closeDropDown}
      ref={parentRef}
    >
      <div
        className={[
          classnames(styles['cux--drop-down__header'], {
            [styles['cux--drop-down__header_mobile']]:
              props?.config?.useMobileStyles,
          }),
        ].join(' ')}
      >
        {header}
      </div>
      <div
        className={[
          classnames(
            props.className,
            styles['cux--drop-down__drop_down'],
            {
              [styles['cux--drop-down__drop_down_mobile']]:
                props?.config?.useMobileStyles,
            },
            { 'position-left': props.dropPosition === 'left' }
          ),
        ].join(' ')}
        ref={dropDownRef}
      >
        {props.config?.useBackDrop && (
          <div className={styles['cux--drop-down__backdrop']}></div>
        )}
        {dropdown}
      </div>
    </div>
  );
};

export const DropDownHeader: FC<{
  children: any;
  className?: string;
}> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const DropDownChildren: FC<{
  children: any;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={classnames(className, 'w-full h-full')}>{children}</div>
  );
};
