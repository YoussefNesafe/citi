import { cva } from "class-variance-authority";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./button-types";

export const buttonCVA = cva(
  [
    'flex',
    ' items-center',
    ' justify-center',
    'transition',
    'transition-all',
    "outline-none",
    'rounded-[1.864vw] tablet:rounded-[1vw] desktop:rounded-[0.416vw]',
    'w-fit',
    'font-medium',
    'leading-[1.25]',
    'disabled:opacity-50',
    'uppercase',
    'font-sans'
  ],
  {
    variants: {
      theme: {
        primary: 'bg-primary-900 text-white hover:bg-primary-600 disabled:hover:bg-primary-900',
        secondary: 'bg-primary-600 text-dark hover:bg-primary-600 disabled:hover:bg-primary-600',
        white: 'bg-white text-primary-900',
        transparent: 'bg-white/10 border border-white rounded-[23.3vw] tablet:rounded-[12.5vw] desktop:rounded-[5.2vw] text-white backdrop-blur-sm font-bold'
      },
      size: {
        sm: "font-semibold text-[3.262vw] tablet:text-[1.75vw] desktop:text-[0.728vw] px-[4.66vw] py-[1.864vw] tablet:px-[2.5vw] tablet:py-[1vw] desktop:px-[1.56vw] desktop:py-[0.52vw]",

        md: "text-[3.262vw] tablet:text-[2vw] desktop:text-[1.04vw] px-[6.99vw] py-[2.33vw] tablet:px-[3.75vw] tablet:py-[1.25vw] desktop:px-[2.34vw] desktop:py-[0.78vw]",

        lg: "text-[3.262vw] tablet:text-[2vw] desktop:text-[1.248vw] px-[10.485vw] py-[3.495vw] tablet:px-[5.625vw] tablet:py-[1.875vw] desktop:px-[3.12vw] desktop:py-[1.04vw]"
      }
    },
    defaultVariants: {
      theme: 'primary',
      size: 'lg',
    },
  }
);


const Button: FC<ButtonProps> = ({ as = "link", href, title, onClick = () => { }, className, theme, size, children, ...props }) => {
  const classes = twMerge(
    buttonCVA({ theme, size }),
    className
  );

  if (as === 'button') {
    return (
      <button onClick={onClick} className={classes} {...props}>
        {title} {children}
      </button>
    );
  }

  return (
    <Link href={href!} className={classes} {...props} prefetch={false}>
      {title}
    </Link>
  );
};

export default Button;
