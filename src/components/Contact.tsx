import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Code, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const contactLinks = [
    {
      name: 'Email',
      value: '16krish2005@gmail.com',
      url: 'mailto:16krish2005@gmail.com',
      icon: Mail,
      color: 'from-red-500 to-pink-500',
      hoverColor: 'hover:shadow-red-500/25'
    },
    {
      name: 'GitHub',
      value: '@KrishnaChaitanya16',
      url: 'https://github.com/KrishnaChaitanya16',
      icon: Github,
      color: 'from-gray-500 to-gray-700',
      hoverColor: 'hover:shadow-gray-500/25'
    },
    {
      name: 'LinkedIn',
      value: '@krishna-chaitanya',
      url: 'https://linkedin.com/in/krishna-chaitanya',
      icon: Linkedin,
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      name: 'LeetCode',
      value: '@16krish2005',
      url: 'https://leetcode.com/16krish2005',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      hoverColor: 'hover:shadow-yellow-500/25'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Initialize EmailJS with your public key
      // You'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_abc123', // Replace 'service_abc123' with your actual service ID
        'template_abc123', // Replace 'template_abc123' with your actual template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: '16krish2005@gmail.com'
        },
        'user_abc123def456' // Replace 'user_abc123def456' with your actual public key
      );
      
      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setError('Failed to send message. Please try again or contact me directly at 16krish2005@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError('');
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
            
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center p-4 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-lg ${link.hoverColor}`}
                >
                  <div className={`p-3 bg-gradient-to-r ${link.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{link.name}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {link.value}
                    </p>
                  </div>
                  <div className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className={`w-2 h-2 bg-gradient-to-r ${link.color} rounded-full animate-pulse`}></div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form or Success Message */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                  
                  {error && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-300">
                      Thank you for reaching out! I'll get back to you as soon as possible.
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;