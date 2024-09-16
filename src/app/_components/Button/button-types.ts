import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { buttonCVA } from ".";

// Base button props
interface BaseButtonProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof buttonCVA> {
  title: string;
  className?: string;
  onClick?: () => void;
  elemSelector?:string;
}

// Link button props
interface LinkButtonProps extends BaseButtonProps {
  as?: 'link';
  href: string;
}

// Button button props
interface RealButtonProps extends BaseButtonProps {
  as?: 'button';
  href?: never;
  type?: 'submit' | 'reset';
  disabled?: boolean;
}

// Union type for all button props
export type ButtonProps = LinkButtonProps | RealButtonProps;