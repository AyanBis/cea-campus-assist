import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Notices", path: "/notices" },
    { name: "Attendance", path: "/attendance" },
    { name: "Academic", path: "/academic" },
    { name: "Clubs", path: "/clubs" },
    { name: "Complaints", path: "/complaints" },
    { name: "Community", path: "/community" },
    { name: "Map", path: "/map" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft transition-all group-hover:shadow-glow">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CEA Portal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button variant="ghost" className="text-sm font-medium">
                  {item.name}
                </Button>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 rounded-full hover:bg-primary/10 transition-all group"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              ) : (
                <Sun className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm font-medium"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              onClick={toggleTheme}
              className="w-full justify-start text-sm font-medium"
            >
              {theme === "light" ? (
                <>
                  <Moon className="w-5 h-5 mr-2" />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun className="w-5 h-5 mr-2" />
                  Light Mode
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
