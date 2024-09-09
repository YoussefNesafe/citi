'use client';
import React, { FC, forwardRef, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import { fieldSetCVA, fieldSetWidthClasses } from '../FieldSet';
import { AdditionalProps, CountriesListProps } from '@/models/IDictionary/SharedProps';
import { useFormContext } from 'react-hook-form';
import Label from '../Span/Label';
import { cn } from '@/lib/utils';
import InputError from '../Span/Errors';
import SVGIcon from '@/app/hocs/SVGIcon';
import PhoneInputComponent from './PhoneInput';
import CountrySelectFieldset from '../FieldSet/CountrySelect';
import SelectFieldSet from '../FieldSet/SelectFieldSet';
import RadioFieldSet from '../FieldSet/RadioFieldSet';
import TextareaFieldSet from '../FieldSet/TextareaFieldSet';
import { cva, VariantProps } from 'class-variance-authority';



export const inputCVA = cva([
  ' desktop:py-[0.936vw] w-full h-full bg-transparent appearance-none outline-none text-[3.73vw] tablet:text-[1.75vw] desktop:text-[0.936vw] leading-[5.33vw] tablet:leading-[2.5vw] desktop:leading-[1.04vw] inline-flex items-center justify-center placeholder:text-dark/50',
]);

export const inputWrapperCVA = cva([
  'border border-dark/20 w-full h-[14.93vw] tablet:h-[7vw] rounded-[1.07vw] tablet:rounded-[0.5vw] desktop:rounded-[0.21vw] px-[4.27vw] tablet:px-[2vw] desktop:px-[0.94vw] flex justify-center items-center [&:has(input:hover)]:border-gold-100 [&:has(input:focus)]:border-primary-900 [&:has(input:disabled)]:opacity-50 [&:has(input:disabled)]:cursor-not-allowed  [&:has(input:disabled)]:border-none [&:has(input[aria-invalid="false"])]:border-green-700 [&:has(input[aria-invalid="true"])]:border-warning-100 desktop:h-auto',
]);


export interface IconProps {
  name?: string;
  className?: string;
  onClick?: any;
}

export type InputProps = AdditionalProps & VariantProps<typeof inputCVA> & {
  defaultValue?: string;
  validation?: object;
  label?: string;
  searchable?: boolean;
  fieldSetWidthClassProp?: keyof typeof fieldSetWidthClasses;
  placeholder?: string;
  name: string;
  touched?: boolean;
  disabled?: boolean;
  errors?: object;
  required?: boolean;
  type?: string;
  inputClassName?: string;
  iconProps?: IconProps;
  options?: any[];
  countrieslist: CountriesListProps;
}

const Input = forwardRef(
  (
    {
      label,
      searchable = false,
      name,
      type = '',
      validation,
      defaultValue,
      options,
      fieldSetWidthClassProp = 'full',
      errors,
      touched,
      required,
      placeholder,
      inputClassName,
      iconProps,
      ...props
    }: InputProps,
    ref
  ) => {
    const { register, watch } = useFormContext();
    const setFieldComponentsFactoryMap: {
      [key: string]: FC<any> | ForwardRefExoticComponent<InputProps & RefAttributes<unknown>>;
    } = {
      phone: PhoneInputComponent,
      country: CountrySelectFieldset,
      select: SelectFieldSet,
      radio: RadioFieldSet,
      textarea: TextareaFieldSet,
    };

    if (setFieldComponentsFactoryMap[name] || setFieldComponentsFactoryMap[type]) {
      const SetFieldComponent = setFieldComponentsFactoryMap[name] || setFieldComponentsFactoryMap[type];
      return (
        <SetFieldComponent
          label={label}
          errors={errors}
          touched={touched}
          name={name}
          type={type}
          validation={validation}
          fieldSetWidthClassProp={fieldSetWidthClassProp}
          required={required}
          placeholder={placeholder}
          iconProps={iconProps}
          inputClassName={inputClassName}
          options={options}
          defaultValue={defaultValue}
          searchable={searchable ? searchable : undefined}
          {...props}
          ref={ref}
        />
      );
    }
    return (
      <fieldset className={cn(fieldSetCVA(), fieldSetWidthClasses[fieldSetWidthClassProp || 'full'])}>
        <Label label={label} className="" />
        <div className={cn(inputWrapperCVA())}>
          <input
            name={name}
            type={type}
            className={cn(inputCVA(), inputClassName)}
            aria-invalid={touched ? (errors ? 'true' : 'false') : undefined}
            placeholder={placeholder}
            {...(register ? register(name, { ...validation }) : '')}
            {...props}
          />
          {iconProps && iconProps.name ? (
            <SVGIcon name={iconProps.name} className={iconProps?.className} onClick={iconProps?.onClick} />
          ) : (
            <></>
          )}
        </div>
        <InputError name={name} />
      </fieldset>
    );
  }
);
Input.displayName = "input";
export default Input;
