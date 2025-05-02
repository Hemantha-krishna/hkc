
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8 container-padding">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white block">Hemantha Krishna</span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Challa</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-6">
            Cybersecurity Specialist & Developer
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-xl mb-8">
            Master's student in Computer Science specializing in Cybersecurity at The University of Texas at Dallas. Passionate about secure system design and web application security.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
              View Portfolio
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="flex items-center gap-2 border border-blue-500 hover:bg-blue-500/10 text-blue-400 px-6 py-3 rounded-md transition-colors">
              Contact Me
            </a>
          </div>
          
          <div className="mt-12">
            <h3 className="text-sm uppercase font-semibold text-foreground/60 mb-3">Key Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {['Network Security', 'Web Development', 'Python', 'Cloud Security'].map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-muted px-3 py-1 text-sm rounded-full text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center opacity-0 animate-fade-in animate-delay-200">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30">
              <img
                src="/lovable-uploads/a7ebe663-7023-469f-bbd9-b03e437736bd.png"
                alt="Hemantha Krishna Challa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
