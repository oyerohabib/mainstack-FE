import { ReactNode } from "react";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="container mx-auto pt-28 px-4">{children}</main>
    </div>
  );
}
