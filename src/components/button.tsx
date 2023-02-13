import { FC } from 'react';
import classNames from 'classnames';

export const Button: FC<{
  className?: string;
  onClick?: () => void;
  children: any;
}> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        'bg-black text-base rounded-8 py-2 px-4 text-white hover:bg-primary transition-colors duration-300 ease-in-out'
      )}
    >
      {children}
    </button>
  );
};
