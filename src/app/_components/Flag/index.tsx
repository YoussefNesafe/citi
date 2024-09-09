import flags from 'country-flag-icons/react/1x1';
import { HTMLAttributes, SVGAttributes } from 'react';

type HTMLSVGElement = HTMLElement & SVGElement;

interface ElementAttributes<T> extends HTMLAttributes<T>, SVGAttributes<T> {}

interface Props extends ElementAttributes<HTMLSVGElement> {}

interface FlagProps extends Props {
  countryCode: string;
}

const FlagComponent = ({ countryCode, ...props }: FlagProps) => {
  const Component = flags[countryCode.toUpperCase() as keyof typeof flags];
  return <Component {...props} />;
};

export default FlagComponent;
