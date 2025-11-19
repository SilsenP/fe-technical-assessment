import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  defaultOption?: DropdownOption;
  placeholder?: string
}

const Dropdown = ({ options, defaultOption, placeholder }: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<DropdownOption | null>(defaultOption || null);

  return (
    <div
      className="flex gap-2 items-center justify-center h-8 rounded-md border-[0.5px] border-neutral-300 text-sm px-[1em] py-[.5em] cursor-pointer"
    >
      {selectedValue?.label || placeholder || ""}
      <MdOutlineArrowDropDown className="w-3 h-3" viewBox="3 3 16 16"/>
    </div>
  )
}

export default Dropdown;