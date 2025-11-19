import { ReactNode } from "react";
import Header from "../navigation/Header";

interface PageLayoutProps {
  title: string;
  actions?: ReactNode;
  children?: ReactNode;
}

const PageLayout = ({ title, actions, children }: PageLayoutProps) => {
  return (
    <div className="h-dvh w-full flex flex-col">
      <Header title={title} actions={actions} />
      <main className="w-full h-auto flex-grow px-5">
        {children}
      </main>
    </div>
  );
}

export default PageLayout;