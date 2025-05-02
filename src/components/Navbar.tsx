
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Shield, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-cyber-dark/80 backdrop-blur-md py-3 border-b border-blue-500/20" 
        : "bg-transparent py-5"
    )}>
      <div className="container-padding mx-auto">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-white flex items-center relative group">
            <div className="absolute -inset-2 bg-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <Shield size={24} className="text-blue-400 mr-1 relative" />
            <span className="text-blue-400 relative">H</span>
            <span className="relative">KC</span>
            <span className="ml-2 text-xs text-blue-400/70 hidden sm:inline-block font-mono relative">//cybersec</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section.name}
                href={section.href}
                className="text-sm font-medium text-foreground/80 hover:text-blue-400 transition-colors relative group"
              >
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-blue-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                {section.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 relative" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute -inset-1 bg-blue-500/20 rounded-lg blur opacity-0 hover:opacity-100 transition-opacity"></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current my-1.5 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 bg-cyber-dark/90 backdrop-blur-md mt-2 rounded-lg border border-blue-500/20">
            <div className="flex flex-col space-y-4 px-4">
              {sections.map((section) => (
                <a
                  key={section.name}
                  href={section.href}
                  className="text-sm font-medium text-foreground/90 hover:text-blue-400 transition-colors py-2 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Terminal size={12} className="mr-2 text-blue-400" />
                  {section.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
