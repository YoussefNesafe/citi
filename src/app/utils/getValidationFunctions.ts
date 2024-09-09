import { ErrorMessagesProps } from "@/models/IDictionary/SharedProps";
import { getTranslatedValidations } from "./getTranslatedValidations";

export const getValidationFunctions = (
  validateObject: keyof ErrorMessagesProps,
  errorMessages: ErrorMessagesProps
) => {
  let validateFnObject: Record<string, any> = {};
  Object.keys(validateObject).forEach((key) => {
    validateFnObject = {
      ...validateFnObject,
      [key]: getTranslatedValidations({ key: key as keyof ErrorMessagesProps, errorMessages }),
    };
  });
  return validateFnObject;
};