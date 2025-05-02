
import React from 'react';
import { Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Jayaho, CCC Digital India Pvt. Ltd.",
      period: "Jun 2022 - Aug 2022",
      location: "Hyderabad, India",
      responsibilities: [
        "Improved website design and user interface, resulting in 20% increased user engagement",
        "Developed an e-learning platform prototype using ReactJs, reducing development time by 10%",
        "Collaborated with a team of 5 developers to implement responsive designs and improve site performance",
        "Conducted code reviews and implemented best practices for web security and performance optimization"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-cyber-dark container-padding">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-blue-500 mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl">
            My professional journey and practical experience in web development and cybersecurity.
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border border-border hover:border-blue-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-foreground/60">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-foreground/70 mb-4 italic">{exp.location}</p>
              
              <h4 className="text-sm font-semibold uppercase text-foreground/50 mb-3">Key Responsibilities & Achievements</h4>
              <ul className="space-y-3">
                {exp.responsibilities.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="border border-blue-500/30 text-center p-6 rounded-lg max-w-2xl">
            <h4 className="font-semibold mb-2">Looking for Additional Experience?</h4>
            <p className="text-foreground/70">
              I'm eligible to work in the US and actively seeking internship and full-time opportunities 
              in cybersecurity and software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
