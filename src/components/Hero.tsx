
import React from 'react';
import { ArrowRight, Shield, Database, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8 container-padding relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-cyber-dark z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Minimal grid lines */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Modern accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute top-3/4 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 z-10">
        <div className="flex-1 opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white block">Hemantha Krishna</span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Challa</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-6 font-mono flex items-center">
            <span className="w-2 h-6 bg-blue-400 mr-3 animate-pulse"></span>
            <span className="text-blue-400">Cybersecurity Specialist & Developer</span>
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-xl mb-8">
            Master's student in Computer Science specializing in Cybersecurity at The University of Texas at Dallas. Passionate about secure system design and web application security.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="group relative px-6 py-3 font-medium text-white transition-colors duration-300 overflow-hidden rounded-md">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                View Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            <a href="#contact" className="flex items-center gap-2 border border-blue-500 bg-blue-500/5 hover:bg-blue-500/10 text-blue-400 px-6 py-3 rounded-md transition-colors">
              Contact Me
            </a>
          </div>
          
          <div className="mt-12">
            <h3 className="text-sm uppercase font-semibold text-foreground/60 mb-4 flex items-center">
              <span className="w-4 h-px bg-blue-500 mr-2"></span>
              Key Areas of Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Network Security', icon: Shield },
                { name: 'Web Development', icon: Terminal },
                { name: 'Python', icon: Terminal },
                { name: 'Cloud Security', icon: Database }
              ].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <span 
                    key={index} 
                    className="bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 text-sm rounded-full text-foreground/90 flex items-center gap-2 border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/15 transition-colors"
                  >
                    <Icon size={14} className="text-blue-400" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center opacity-0 animate-fade-in animate-delay-200">
          <div className="relative">
            <div className="absolute -inset-5 bg-gradient-to-r from-blue-500/20 to-blue-500/5 rounded-full blur-xl"></div>
            
            <div className="relative rounded-full overflow-hidden border-2 border-blue-500/30 w-64 h-64 md:w-80 md:h-80">
              <img
                src="/lovable-uploads/a7ebe663-7023-469f-bbd9-b03e437736bd.png"
                alt="Hemantha Krishna Challa"
                className="w-full h-full object-cover"
              />
              
              {/* Modern scan effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-blue-500/10"></div>
              <div className="absolute inset-0 border-t border-blue-500/20"></div>
              <div className="absolute inset-0 border-b border-blue-500/20"></div>
              
              {/* Glowing accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-blue-400/50"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-blue-400/50"></div>
            </div>
            
            {/* Connection points with modern styling */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500/80 shadow-[0_0_8px_4px_rgba(59,130,246,0.3)]"></div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500/80 shadow-[0_0_8px_4px_rgba(59,130,246,0.3)]"></div>
            <div className="absolute left-5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-500/80 shadow-[0_0_8px_4px_rgba(59,130,246,0.3)]"></div>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-500/80 shadow-[0_0_8px_4px_rgba(59,130,246,0.3)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
