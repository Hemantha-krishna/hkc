
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-cyber-dark border-t border-border">
      <div className="container-padding max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white flex items-center mb-2">
              <span className="text-blue-400">H</span>KC
            </div>
            <p className="text-foreground/60">Cybersecurity Specialist & Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#home" className="text-foreground/70 hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-foreground/70 hover:text-blue-400 transition-colors">About</a>
            <a href="#portfolio" className="text-foreground/70 hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#experience" className="text-foreground/70 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="text-foreground/70 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-foreground/60">
            © {currentYear} Hemantha Krishna Challa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
