import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navClasses = `fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-blue-800 shadow-lg' : 'bg-transparent'
  }`;

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex w-[56px] items-center">
            <img src="/lovable-uploads/web3unilag-white.png" alt="Web3Unilag" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
className={`${scrolled ? 'text-white hover:text-blue-200' : 'text-white'} text-sm font-semibold transition-colors duration-300 font-medium`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCXQSKZ3RWhET3IkZJVB1HMvSXLZ-Edhv3V_PQ6qlebOC8Pg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={`${scrolled ? 'bg-white text-blue-800 hover:bg-blue-100' : 'bg-primary text-white hover:bg-primary/90'} font-semibold transition-colors duration-300`}>
                Join Community
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-white hover:text-blue-200' : 'text-white'} transition-colors duration-300`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-800 border-t border-blue-700/50">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-blue-200 transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeCXQSKZ3RWhET3IkZJVB1HMvSXLZ-Edhv3V_PQ6qlebOC8Pg/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full text-sm font-semibold bg-white text-blue-800 hover:bg-blue-100 transition-colors duration-300">
                    Join Community
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;