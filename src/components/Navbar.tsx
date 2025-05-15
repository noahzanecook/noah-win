import * as React from "react";
import { Link } from "react-router-dom";
import { Github, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-10 shadow-sm">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            {/* Left - Home link */}
            <div className="w-1/3">
              <Link to="/" className="font-bold text-xl nav-link">
                noah.win
              </Link>
            </div>
            
            {/* Center - Navigation Links */}
            <div className="w-1/3 flex justify-center">
              <div className="flex items-center space-x-8">
                <Link to="/background" className="nav-link">
                  Background
                </Link>
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Right - GitHub link */}
            <div className="w-1/3 flex justify-end">
              <a 
                href="https://github.com/noahzanecook/noah-win" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left - Home link */}
            <Link to="/" className="font-bold text-xl nav-link">
              noah.win
            </Link>
            
            {/* Right - GitHub link and Menu */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/noahzanecook/noah-win" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button className="hover:text-gray-600 transition-colors">
                    <Menu size={24} />
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link 
                      to="/background" 
                      className="text-lg font-medium hover:text-gray-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Background
                    </Link>
                    <Link 
                      to="/projects" 
                      className="text-lg font-medium hover:text-gray-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Projects
                    </Link>
                    <Link 
                      to="/contact" 
                      className="text-lg font-medium hover:text-gray-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
