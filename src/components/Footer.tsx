
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-cyber-dark bg-gradient-to-t from-black/30 to-transparent border-t border-blue-500/20">
      <div className="container-padding max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold text-white flex items-center mb-2">
              <span className="text-blue-400">H</span>KC
              <span className="ml-2 text-xs text-blue-400/70 font-mono">//cybersec</span>
            </div>
            <p className="text-foreground/60">Cybersecurity Specialist & Developer</p>
          </div>
          
          <div className="flex flex-col mb-8 md:mb-0 md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#home" className="text-foreground/70 hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-foreground/70 hover:text-blue-400 transition-colors">About</a>
            <a href="#portfolio" className="text-foreground/70 hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#experience" className="text-foreground/70 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="text-foreground/70 hover:text-blue-400 transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-muted w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500/20 transition-colors border border-blue-500/20">
              <Github size={18} className="text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-muted w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500/20 transition-colors border border-blue-500/20">
              <Linkedin size={18} className="text-blue-400" />
            </a>
            <a href="mailto:hxc230046@utdallas.edu" className="bg-muted w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500/20 transition-colors border border-blue-500/20">
              <Mail size={18} className="text-blue-400" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-500/10 mt-8 pt-8 text-center">
          <p className="text-foreground/50 text-sm">
            © {currentYear} Hemantha Krishna Challa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
