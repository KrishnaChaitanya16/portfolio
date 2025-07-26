import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Flutter Developer',
    'Full Stack Enthusiast', 
    'Generative AI Explorer',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Krishna Chaitanya
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 h-12 flex items-center justify-center">
              <span className="border-r-2 border-blue-400 pr-2 animate-pulse">
                {text}
              </span>
            </div>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Computer Science Student at IIIT-Bangalore • Bengaluru, India
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://drive.google.com/file/d/18cO90qPrh7lENYOQ_ClEmrldLNVO1TGB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Download size={20} />
                <span>View Resume</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold transition-all duration-300 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Mail size={20} />
                <span>Get in Touch</span>
              </div>
            </button>
          </div>

          <div className="mt-16">
            <button 
              onClick={scrollToNext}
              className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-float animation-delay-3000"></div>
      </div>
    </section>
  );
};

export default Hero;