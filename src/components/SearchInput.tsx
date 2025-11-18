import { BiSearchAlt } from "react-icons/bi";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

const SearchInput = ({ placeholder, className }: SearchInputProps) => {
  return (
    <div
      className={`h-8 flex gap-2 items-center px-3 py-[6px] rounded-md border border-neutral-300 ${className}`}
    >
      <BiSearchAlt
        className="flex-shrink-0 w-4 h-4 -scale-x-100"
      />
      <input
        type="search"
        placeholder={placeholder}
        className="border-none outline-none text-sm text-neutral-500 flex-grow"
      />
    </div>
  );
}

export default SearchInput;