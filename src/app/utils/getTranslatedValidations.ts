import { ErrorMessagesProps } from "@/models/IDictionary/SharedProps";

const regexDict = {
  //Email regex as per RFC 5322 standard
  //negative lookahead is followed to avoid negation in test code
  emailRegex: new RegExp(
    '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'
  ),
};


export const getTranslatedValidations = ({
  key,
  errorMessages,
}: {
  key: keyof ErrorMessagesProps;
  errorMessages: ErrorMessagesProps;
}) => {
  const validatorsMap: { [key: string]: (value: string) => void } = {
    email: (value: string) => regexDict['emailRegex'].test(value) || errorMessages[key],
    minLength: (value: string) => value.length >= 2 || errorMessages[key]
  };
  return validatorsMap[key];
};