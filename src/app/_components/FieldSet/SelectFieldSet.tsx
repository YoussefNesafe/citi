'use client';
import { Controller, useFormContext } from 'react-hook-form';
import { FC } from 'react';
import { InputProps, inputWrapperCVA } from '../Input';
import FieldSet from '.';
import Select from '../Select';






const SelectFieldSet: FC<InputProps> = ({
  name,
  label,
  options,
  searchable = false,
  validation,
  defaultValue,
  placeholder,
  fieldSetWidthClassProp,
}: InputProps): JSX.Element => {
  const defaultOption = defaultValue
    ? options?.filter(({ value }) => Number(value) === Number(defaultValue)) || []
    : [];
  const { control } = useFormContext();
  return (
    <FieldSet fieldSetWidthClassProp={fieldSetWidthClassProp} label={label} name={name}>
      <Controller
        render={({ field }) => (
          <Select
            placeholder={placeholder}
            multi={false}
            searchable={searchable}
            options={options || []}
            values={defaultOption}
            className={inputWrapperCVA()}
            {...field}
          />
        )}
        name={name}
        control={control}
        rules={validation}
        defaultValue={defaultOption}
      />
    </FieldSet>
  );
};

export default SelectFieldSet;
