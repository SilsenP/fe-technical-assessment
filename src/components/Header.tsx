import { ReactNode } from "react";

interface HeaderProps {
  title: string;
  actions: ReactNode;
}

const Header = ({ title, actions }: HeaderProps) => {
  return (
    <header
      className="w-full h-20 flex items-center justify-between p-5 border-b-[0.5px] border-neutral-200 flex-shrink-0"
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      {actions}
    </header>
  );
}

export default Header;