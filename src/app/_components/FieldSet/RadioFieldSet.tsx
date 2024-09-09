'use client';
import { Controller, useFormContext } from 'react-hook-form';
import type { FC } from 'react';
import FieldSet from '.';
import { InputProps } from '../Input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import Label from '../Span/Label';

const RadioFieldSet: FC<InputProps> = ({
  name,
  options,
  label,
  defaultValue,
  validation,
  placeholder,
  disabled,
  fieldSetWidthClassProp,
  ...props
}): JSX.Element => {
  const { control } = useFormContext();
  return (
    <FieldSet fieldSetWidthClassProp={fieldSetWidthClassProp} name={name} label={label}>
      <Controller
        render={({ field }) => (
          <RadioGroup
            placeholder={placeholder}
            disabled={disabled}
            {...field}
            defaultValue={defaultValue || options?.[0]?.value}
            onValueChange={field.onChange}
            className='flex gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[1.04vw]'
          >
            {
              options?.map(item => <div key={item.value}  >
                <RadioGroupItem value={item.value} id={item.label} icon={item.icon} label={item.label} />
              </div>)
            }
          </RadioGroup>
        )}
        name={name}
        control={control}
        rules={validation}
        defaultValue={defaultValue}
      />
    </FieldSet>
  );
};

export default RadioFieldSet;
