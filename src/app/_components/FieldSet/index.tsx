import { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import Label from '../Span/Label';
import InputError from '../Span/Errors';
import { cn } from '@/lib/utils';

export const fieldSetCVA = cva(['group flex mb-[4.272vw] tablet:mb-[2vw] desktop:mb-[1.248vw] flex-col w-full']);

export interface FieldSetProps {
  fieldSetWidthClassProp?: keyof typeof fieldSetWidthClasses;
  label?: string;
  name: string;
  children?: ReactNode;
}

export enum fieldSetWidthClasses {
  third = 'w-third',
  half = 'w-half',
  full = 'w-full',
  halfDesktopFull = 'w-full desktop:w-half',
}

const FieldSet = ({ fieldSetWidthClassProp, label, name, children }: FieldSetProps): JSX.Element => {
  return (
    <fieldset className={cn(fieldSetCVA(), fieldSetWidthClasses[fieldSetWidthClassProp || 'full'])}>
      <Label label={label} />
      {children}
      <InputError name={name} />
    </fieldset>
  );
};

export default FieldSet;
