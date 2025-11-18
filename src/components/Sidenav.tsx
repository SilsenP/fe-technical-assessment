import { ReactNode } from "react";
import Button from "./Button";
import { LiaPlusSolid } from "react-icons/lia";

interface SidenavProps {
  children?: ReactNode
}

const Sidenav = ({ children }: SidenavProps) => {

  return (
    <nav className="h-dvh w-60 border-r border-neutral-200 p-2 flex flex-col gap-2">
      {children}
    </nav>
  );
}

interface SidenavProfileProps {
  name: string;
}

Sidenav.Profile = ({ name }: SidenavProfileProps) => {
  const handleOpenProfile = () => {
    alert("Redirect to profile");
  }

  return (
    <div className="flex gap-2 justify-start items-center px-2 cursor-pointer" onClick={handleOpenProfile}>
      <span className="w-9 h-9 bg-violet-300 rounded-md" />
      <span className="text-sm font-semibold leading-[20px]">{name}</span>
    </div>
  );
}

Sidenav.CreateButton = () => {
  return (
    <Button
      endIcon={<LiaPlusSolid className="w-3 h-3 stroke-2" />}
      className="w-full h-8 border-neutral-200 text-sm font-semibold shadow-xs rounded-md hover:bg-neutral-200 hover:border-neutral-400"
    >
      New
    </Button>
  );
}

interface SidenavActionsContainerProps {
  children: ReactNode;
}

Sidenav.ActionsContainer = ({ children }: SidenavActionsContainerProps) => {
  return (
    <div className="w-full flex flex-col">
      {children}
    </div>
  );
}

interface SidenavActionProps {
  icon?: ReactNode;
  label: string;
  path: string;
}

Sidenav.Action = ({ icon, label, path }: SidenavActionProps) => {
  const redirect = () => {
    alert(`Will redirect to ${path}`);
  }

  return (
    <div className="flex gap-2 items-center cursor-pointer h-8">
      <span className="flex-shrink-0 w-3 h-3 fill-gray-500 text-gray-500">
        {icon}
      </span>
      <span className="text-xs font-medium text-neutral-600" onClick={redirect}>
        {label}
      </span>
    </div>
  );
}

export default Sidenav;