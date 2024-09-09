import { useFormContext } from 'react-hook-form';
import React, { type FC } from 'react';
import { inputCVA, InputProps, inputWrapperCVA } from '../Input';
import FieldSet from '.';
import { cn } from '@/lib/utils';

const TextareaFieldSet: FC<InputProps> = ({
  name,
  label,
  validation,
  placeholder,
  disabled,
  inputClassName,
  touched,
  errors,
  fieldSetWidthClassProp,
}: InputProps): JSX.Element => {
  const { register } = useFormContext();
  return (
    <FieldSet fieldSetWidthClassProp={fieldSetWidthClassProp} name={name} label={label}>
      <div className={cn(inputWrapperCVA(), 'h-auto tablet:h-auto desktop:h-auto')}>
        <textarea
          maxLength={200}
          name={name}
          disabled={disabled || false}
          className={cn(
            inputCVA(),
            'min-h-[34.67vw] justify-start tablet:min-h-[16.25vw] desktop:min-h-[6.77vw]',
            'resize-none py-[5.33vw] tablet:py-[2.5vw] desktop:py-[1.04vw]',
            inputClassName
          )}
          aria-invalid={touched ? (errors ? 'true' : 'false') : undefined}
          placeholder={placeholder}
          {...(register ? register(name, { ...validation }) : '')}
        />
      </div>
    </FieldSet>
  );
};

export default TextareaFieldSet;
