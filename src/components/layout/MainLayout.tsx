import { ReactNode } from "react";
import { Header } from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-white">
      <div className="flex flex-col flex-1">
        <Header />
        <main className="w-full px-8 py-6 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
