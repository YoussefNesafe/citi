'use client';
import React, { type FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { fieldSetCVA, fieldSetWidthClasses } from '.';
import { InputProps, inputWrapperCVA } from '../Input';
import { cn } from '@/lib/utils';
import Label from '../Span/Label';
import Select from '../Select';
import InputError from '../Span/Errors';

const CountrySelectFieldset: FC<InputProps> = ({
  label,
  name,
  fieldSetWidthClassProp,
  validation,
  defaultValue,
  placeholder,
  countrieslist,
  errors,
}: InputProps): JSX.Element => {
  const defaultOption = defaultValue
    ? countrieslist?.filter(({ value }) => Number(value) === Number(defaultValue)) || []
    : [];
  const { control } = useFormContext();
  return (
    <fieldset className={cn(fieldSetCVA(), `${fieldSetWidthClasses[fieldSetWidthClassProp || 'full']}`)}>
      <Label label={label} />
      <Controller
        rules={validation}
        control={control}
        name={name}
        defaultValue={defaultOption}
        render={({ field }) => (
          <Select
            placeholder={placeholder || ''}
            multi={false}
            searchable={true}
            className={cn(inputWrapperCVA())}
            values={defaultOption}
            options={countrieslist}
            {...field}
          />
        )}
      />
      <InputError name={name} />
    </fieldset>
  );
};

export default CountrySelectFieldset;
