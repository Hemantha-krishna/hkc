
import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend service
    console.log("Form data submitted:", formData);
    setFormStatus('success');
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };
  
  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "hxc230046@utdallas.edu"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "(945) 276-1755"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/hemantha",
      link: "https://linkedin.com"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "github.com/hemantha",
      link: "https://github.com"
    },
    {
      icon: <ExternalLink size={20} />,
      label: "TryHackMe",
      value: "tryhackme.com/p/hemantha",
      link: "https://tryhackme.com"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary container-padding">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl">
            Feel free to reach out if you have any questions or would like to discuss potential opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h3>
            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 text-blue-400 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">{item.label}</p>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-card rounded-lg border border-border">
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-foreground/70">McKinney, Texas</p>
              <p className="text-foreground/70 mt-4">Open to remote and relocation opportunities</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-muted border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Send Message
              </button>
              
              {formStatus === 'success' && (
                <div className="p-3 bg-green-500/20 text-green-400 rounded-md">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-3 bg-red-500/20 text-red-400 rounded-md">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
