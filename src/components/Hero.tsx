
import React from 'react';
import { ArrowRight, Shield, Database, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8 container-padding relative cyber-grid">
      {/* Digital particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Circuit lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 z-10">
        <div className="flex-1 opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white block">Hemantha Krishna</span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent cyber-text">Challa</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-6 font-mono">
            <span className="inline-block w-3 h-5 bg-blue-400 animate-pulse mr-2"></span>
            Cybersecurity Specialist & Developer
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-xl mb-8">
            Master's student in Computer Science specializing in Cybersecurity at The University of Texas at Dallas. Passionate about secure system design and web application security.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors relative overflow-hidden group">
              <span className="relative z-10">View Portfolio</span>
              <ArrowRight size={18} className="relative z-10" />
              <div className="absolute inset-0 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#contact" className="flex items-center gap-2 border border-blue-500 hover:bg-blue-500/10 text-blue-400 px-6 py-3 rounded-md transition-colors">
              Contact Me
            </a>
          </div>
          
          <div className="mt-12">
            <h3 className="text-sm uppercase font-semibold text-foreground/60 mb-3 flex items-center">
              <span className="w-4 h-px bg-blue-500 mr-2"></span>
              Key Areas of Expertise
              <span className="w-4 h-px bg-blue-500 ml-2"></span>
            </h3>
            <div className="flex flex-wrap gap-2">
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
                    className="bg-muted px-3 py-1 text-sm rounded-full text-foreground/80 flex items-center gap-1 border border-transparent hover:border-blue-500/50 transition-colors"
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
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 cyber-border scan-line">
              <img
                src="/lovable-uploads/a7ebe663-7023-469f-bbd9-b03e437736bd.png"
                alt="Hemantha Krishna Challa"
                className="w-full h-full object-cover"
              />
              {/* Digital scan effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
            </div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent blur"></div>
            <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
            
            {/* Circuit lines around the profile */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-blue-500/30"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-px bg-blue-500/30"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-blue-500/30"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-blue-500/30"></div>
            
            {/* Connection points */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500/50 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500/50 rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500/50 rounded-full"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
