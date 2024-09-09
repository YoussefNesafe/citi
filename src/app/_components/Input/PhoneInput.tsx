'use client';
import React, { FC } from 'react';
import flags from 'country-flag-icons/react/1x1';
import { useFormContext } from 'react-hook-form';
import PhoneInputWithCountrySelect, { Value } from 'react-phone-number-input/react-hook-form';
import FieldSet from '../FieldSet';
import { cva } from 'class-variance-authority';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import FlagComponent from '../Flag';
import { ChevronDownIcon, SeparatorVertical } from 'lucide-react';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '../ui/command';
import { inputCVA, InputProps } from '.';

const flagCVA = cva(['w-[5.33vw] rounded-full tablet:w-[2.5vw] desktop:w-[1.04vw]']);

const FlagRenderer = ({ countryCode }: { countryCode?: string }) => (
  <FlagComponent className={cn(flagCVA())} countryCode={countryCode || 'AE'} />
);

const CountrySelectWrapper = ({
  value: currentSelected,
  onChange,
  options,
}: {
  value?: Value;
  onChange(value?: Value): void;
  options: { label: string; value: any }[];
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          className={cn(
            inputCVA(),
            'text-dark flex w-auto shrink-0 items-center justify-center gap-[4.272vw] rounded-r-none border-r-0 pr-0 tablet:gap-[2vw] tablet:rounded-r-none tablet:border-r-0 tablet:pr-0 desktop:gap-[0.832vw] desktop:rounded-r-none desktop:border-r-0 desktop:pr-0 '
          )}
        >
          <FlagRenderer countryCode={currentSelected?.toLowerCase()} />
          <ChevronDownIcon className={cn('')} />

        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={0}
        className={cn(
          'w-[calc(var(--radix-popover-trigger-width)+53.33vw)] rounded-t-none p-1 tablet:w-[calc(var(--radix-popover-trigger-width)+25vw)] tablet:rounded-t-none desktop:w-[calc(var(--radix-popover-trigger-width)+10.42vw)] desktop:rounded-t-none'
        )}
      >
        <Command>
          <CommandInput />
          <CommandEmpty>No Country found.</CommandEmpty>
          <CommandList className="overflow-auto transition-[height]">
            {options?.map((country) => (
              <CommandItem
                className={cn('cursor-pointer gap-[1.864vw] tablet:gap-[1vw] desktop:gap-[0.416vw]')}
                value={country.label}
                key={country.value}
                onSelect={() => {
                  onChange(country.value);
                }}
              >
                <FlagComponent className={cn(flagCVA())} countryCode={country.value || 'AE'} />
                {country.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const PhoneInputComponent: FC<InputProps> = ({
  name,
  validation,
  placeholder,
  fieldSetWidthClassProp,
  label,
  countrieslist
}: InputProps) => {
  const isoCode = 'AE';
  const { control } = useFormContext();
  return (
    <FieldSet fieldSetWidthClassProp={fieldSetWidthClassProp || 'half'} name={name} label={label}>
      <PhoneInputWithCountrySelect
        name={name}
        className={
          'rtl:[&>input]:dir-ltr flex h-[14.93vw] w-full  flex-row rounded-[1.07vw] border border-secondary-500  px-[4.27vw] tablet:h-[7vw] tablet:rounded-[0.5vw] tablet:px-[2vw] desktop:h-[3.25vw] desktop:rounded-[0.21vw] desktop:px-[0.94vw] rtl:flex-row-reverse [&>.PhoneInputCountry>*]:bg-transparent [&>.PhoneInputCountry]:flex [&>.PhoneInputCountry]:flex-row [&>input]:box-border [&>input]:inline-flex [&>input]:h-full [&>input]:w-full [&>input]:appearance-none [&>input]:items-center [&>input]:justify-center [&>input]:bg-transparent [&>input]:text-[3.73vw] [&>input]:leading-[5.33vw] [&>input]:text-dark [&>input]:outline-none [&>input]:placeholder:text-dark [&>input]:tablet:text-[1.75vw] [&>input]:tablet:leading-[2.5vw] [&>input]:desktop:text-[0.936vw] [&>input]:desktop:leading-[1.04vw] rtl:[&>input]:text-left '
        }
        control={control}
        rules={validation}
        flags={flags}
        international={true}
        countryCallingCodeEditable={false}
        //always have a default value
        defaultCountry={isoCode}
        limitMaxLength={true}
        countrySelectComponent={(fieldProps) => <CountrySelectWrapper {...fieldProps} options={countrieslist} />}
        placeholder={placeholder}
      />
    </FieldSet>
  );
};

export default PhoneInputComponent;
