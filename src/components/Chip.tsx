import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  className?: string;
}

const Chip = ({ children, className }: ChipProps) => (
  <div
    className={`w-fit flex gap-2 items-center justify-center box-border border-gray-300 border rounded-full py-1 px-2 text-sm font-semibold ${className}`}
  >
    {children}
  </div>
)

export default Chip;