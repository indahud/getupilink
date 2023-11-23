import { ReactNode } from "react";
import { Navbar } from '@/components/Navbar';
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
  );
};

export default MainLayout;