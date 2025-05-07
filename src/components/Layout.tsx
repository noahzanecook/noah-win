
import { ReactNode } from 'react';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <main className="pt-20 pb-10">
        {children}
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-100">
        &copy; {new Date().getFullYear()} | noah.win
      </footer>
    </div>
  );
};

export default Layout;
