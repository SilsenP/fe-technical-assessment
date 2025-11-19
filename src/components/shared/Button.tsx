import { MouseEvent, ReactElement, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  className?: string;
}

const Button = ({ children, className, endIcon, onClick, startIcon }: ButtonProps) => {

  return (
    <button
      onClick={onClick}
      className={`flex gap-[6px] items-center justify-center box-border border ${className}`}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}

export default Button;