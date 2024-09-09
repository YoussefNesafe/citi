'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { X } from "lucide-react"

interface ErrorsProps {
  name: string;
  passwordField?: boolean;
  capsLockToggle?: boolean;
  customErrorMessage?: string;
}

interface errorObject {
  message: string;
  types?: { [key: string]: string };
}

function InputError({ name, passwordField, capsLockToggle, customErrorMessage }: ErrorsProps) {
  const {
    formState: { errors },
    setError,
  } = useFormContext();
  if (!errors[name]) return;
  if (customErrorMessage && customErrorMessage !== '') {
    setError(name, { message: customErrorMessage });
  }
  const { message, types } = errors[name] as errorObject;
  return (
    <>
      {message && !passwordField ? (
        <span className="mt-[1.068vw] flex items-center gap-[2.67vw] text-[3.204vw] font-bold text-warning-100 tablet:mt-[0.5vw] tablet:gap-[1.25vw] tablet:text-[1.5vw] desktop:mt-[0.208vw] desktop:gap-[0.52vw] desktop:text-[0.624vw]">
          <X
            className="inline-block h-[3.204vw] w-[3.204vw] tablet:h-[1.5vw] tablet:w-[1.5vw] desktop:h-[0.624vw] desktop:w-[0.624vw]"
            name="close"
          />
          {message}
        </span>
      ) : (
        <></>
      )}
    </>
  );
}

export function InputMessage({
  children,
  className,
}: {
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      {children ? (
        <span className="mt-[1.07vw] flex items-center gap-[2.67vw] text-[3.2vw] font-bold text-warning-100 tablet:mt-[0.5vw] tablet:gap-[1.25vw] tablet:text-[1.5vw] desktop:mt-[0.21vw] desktop:gap-[0.52vw] desktop:text-[0.63vw]">
          <X
            className="inline-block h-[3.2vw] w-[3.2vw] tablet:h-[1.5vw] tablet:w-[1.5vw] desktop:h-[0.63vw] desktop:w-[0.63vw]"
            name="close"
          />
          {children}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default InputError;
