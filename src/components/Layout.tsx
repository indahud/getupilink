import { ReactNode } from "react";
import { Navbar } from '@/components/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
        <Navbar />
        <main>{children}</main>
    </>
  );
};

export default MainLayout;