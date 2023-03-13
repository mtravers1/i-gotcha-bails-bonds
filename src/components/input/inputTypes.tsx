import { FC } from 'react';
import { Input } from '.';
import { RadioInput } from './radio';
import { Select } from './select';

export const InputTypes: FC<any> = (props: any) => {
  switch (props.itype) {
    case 'radio':
      return <RadioInput {...props} />;
    case 'select':
      return <Select {...props} />;
    default:
      return <Input {...props} />;
  }
};
