
import { ReactNode } from 'react';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

{/* Formerly used this file for a footer that is now removed. */}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <main className="pt-20 pb-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
