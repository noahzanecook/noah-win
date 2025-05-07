
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left - Home link */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl nav-link">
              noah.win
            </Link>
          </div>
          
          {/* Center - Navigation Links */}
          <div className="hidden md:flex justify-center flex-1">
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
          <div className="flex-shrink-0">
            <a 
              href="https://github.com/noahzanecook" 
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
      
      {/* Mobile menu */}
      <div className="md:hidden border-t border-gray-100">
        <div className="flex justify-center py-2 space-x-6">
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
    </nav>
  );
};

export default Navbar;
