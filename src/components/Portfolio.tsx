
import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'projects' | 'publications'>('all');
  
  const projects = [
    {
      title: "Encrypted File System",
      description: "Designed a secure file system that provides end-to-end encryption for stored files, featuring role-based access control and integrity verification.",
      technologies: ["AES", "SHA-256", "Python", "Flask"],
      github: "#github-link",
      demo: "",
      type: "projects"
    },
    {
      title: "Photo Sharing App",
      description: "Developed a secure photo sharing application with encryption for content protection and user authentication features.",
      technologies: ["React", "Node.js", "MongoDB", "JWT Auth"],
      github: "#github-link",
      demo: "#demo-link",
      type: "projects"
    },
    {
      title: "MEC Task Offloading",
      description: "Research on efficient task offloading techniques in Mobile Edge Computing (MEC) environment, published in IEEE Xplore.",
      technologies: ["Python", "Simulation", "Cloud Computing", "Edge Computing"],
      github: "",
      demo: "https://ieeexplore.ieee.org",
      paper: true,
      type: "publications"
    },
    {
      title: "ML Intrusion Detection System",
      description: "Applied machine learning and explainable AI techniques for network intrusion detection with improved accuracy and interpretability.",
      technologies: ["Python", "ML", "XAI", "Network Security"],
      github: "#github-link",
      status: "Under Review",
      paper: true,
      type: "publications"
    }
  ];
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeTab);

  return (
    <section id="portfolio" className="section-padding bg-secondary container-padding">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <div className="h-1 w-20 bg-blue-500 mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl">
            A showcase of my academic and personal projects, highlighting my expertise 
            in cybersecurity, software development, and research publications.
          </p>
        </div>
        
        <div className="flex mb-8 border-b border-border">
          <button 
            onClick={() => setActiveTab('all')} 
            className={`px-6 py-3 font-medium transition-colors relative ${activeTab === 'all' ? 'text-blue-400' : 'text-foreground/70 hover:text-foreground'}`}
          >
            All Work
            {activeTab === 'all' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('projects')} 
            className={`px-6 py-3 font-medium transition-colors relative ${activeTab === 'projects' ? 'text-blue-400' : 'text-foreground/70 hover:text-foreground'}`}
          >
            Projects
            {activeTab === 'projects' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('publications')} 
            className={`px-6 py-3 font-medium transition-colors relative ${activeTab === 'publications' ? 'text-blue-400' : 'text-foreground/70 hover:text-foreground'}`}
          >
            Publications
            {activeTab === 'publications' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground/50 mb-2">TECHNOLOGIES USED</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-muted px-2 py-1 text-xs rounded-full text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-auto">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-blue-400 transition-colors">
                    <Github size={16} />
                    View Code
                  </a>
                )}
                
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-blue-400 transition-colors">
                    <ExternalLink size={16} />
                    {project.paper ? "View Publication" : "Live Demo"}
                  </a>
                )}
                
                {project.status && (
                  <span className="inline-flex items-center text-sm text-blue-400">
                    {project.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
