import { ReactNode } from "react";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-col flex-1 relative">
        <Header />
        <Sidebar />
        <main className="w-full px-8 pb-14 max-w-6xl xl:max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
