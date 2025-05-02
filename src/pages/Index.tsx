
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Add a subtle digital noise effect to the background
  useEffect(() => {
    const createNoiseEffect = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 200;
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.opacity = '0.015';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '-1';
      
      document.body.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const generateNoise = () => {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          const value = Math.random() * 255;
          data[i] = value;
          data[i + 1] = value;
          data[i + 2] = value;
          data[i + 3] = 255;
        }
        
        ctx.putImageData(imageData, 0, 0);
      };
      
      generateNoise();
      
      return () => {
        document.body.removeChild(canvas);
      };
    };
    
    const cleanup = createNoiseEffect();
    return cleanup;
  }, []);
  
  return (
    <div className="min-h-screen bg-cyber-dark text-foreground relative overflow-hidden">
      {/* Modern background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradients */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-900/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent"></div>
        
        {/* Subtle grid with cleaner aesthetic */}
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        
        {/* Minimal horizontal and vertical lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-blue-500/10"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-blue-500/10"></div>
        <div className="absolute top-0 left-1/3 h-full w-px bg-blue-500/10"></div>
        <div className="absolute top-0 left-2/3 h-full w-px bg-blue-500/10"></div>
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
