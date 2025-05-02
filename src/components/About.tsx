
import React from 'react';

const About = () => {
  const educationItems = [
    {
      degree: "Master of Science in Computer Science",
      specialization: "Cybersecurity specialization",
      institution: "The University of Texas at Dallas",
      period: "2023 - 2025 (Expected)",
      details: "Expected NSA CAE designation"
    },
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      specialization: "Cybersecurity focus",
      institution: "Vellore Institute of Technology",
      period: "2019 - 2023",
      details: ""
    }
  ];

  const skillCategories = [
    {
      name: "Cybersecurity",
      skills: ["Network Security", "Digital Forensics", "Web Application Security", "Cryptography", "Security Analysis"]
    },
    {
      name: "OS & Virtualization",
      skills: ["Windows", "Linux", "MacOS", "VMware", "VirtualBox"]
    },
    {
      name: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"]
    },
    {
      name: "Programming",
      skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript"]
    },
    {
      name: "Web Development",
      skills: ["HTML/CSS", "React", "Node.js", "Express", "TailwindCSS", "RESTful APIs"]
    },
    {
      name: "Software & Tools",
      skills: ["Git", "Docker", "Wireshark", "Burp Suite", "Metasploit"]
    }
  ];

  const certifications = [
    {
      name: "CompTIA Security+",
      status: "In Progress - May 2025"
    }
  ];

  const softSkills = ["Problem-solving", "Communication", "Teamwork", "Leadership"];
  const languages = ["English (Fluent)", "Telugu (Native)", "Hindi (Fluent)", "Japanese (Elementary)"];

  return (
    <section id="about" className="section-padding bg-cyber-dark container-padding">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl">
            I am a dedicated Computer Science graduate student specializing in Cybersecurity at The University of Texas at Dallas. 
            With a strong foundation from my Bachelor's degree in the same field, I blend technical knowledge with practical application, 
            particularly in secure system design and web development. I'm passionate about tackling complex security challenges and creating 
            robust technical solutions. Currently pursuing my Master's degree with a scholarship, I'm constantly expanding my knowledge 
            in cutting-edge cybersecurity practices while building practical projects that apply theory to real-world scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Education</h3>
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-500/30">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-500"></div>
                  <h4 className="font-semibold text-lg">{item.degree}</h4>
                  <p className="text-blue-400 mb-1">{item.specialization}</p>
                  <p className="text-foreground/80 mb-1">{item.institution}</p>
                  <p className="text-sm text-foreground/60">{item.period}</p>
                  {item.details && <p className="text-sm text-foreground/70 mt-1">{item.details}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="expertise-card">
                  <h4 className="font-semibold mb-3">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-muted px-2 py-1 text-xs rounded-full text-foreground/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Certifications */}
          <div className="expertise-card">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500 mr-2"></span>
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-foreground/60">{cert.status}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="expertise-card">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span key={index} className="bg-muted px-3 py-1 text-sm rounded-full text-foreground/80">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="expertise-card">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Languages</h3>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <p key={index} className="text-foreground/80">{language}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
