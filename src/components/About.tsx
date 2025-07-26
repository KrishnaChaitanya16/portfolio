import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <MapPin className="text-green-400 mr-2" size={20} />
                  <span className="text-gray-300">Bengaluru, India</span>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Computer Science student at <span className="text-blue-400 font-semibold">IIIT-Bangalore</span> with 
                  hands-on experience in full-stack development, Flutter, and generative AI. 
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Open-source contributor & DSA solver, passionate about building innovative solutions 
                  that bridge the gap between technology and user experience.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Currently looking for <span className="text-green-400 font-semibold">SDE Intern roles</span> to 
                  deepen system-level knowledge and contribute to impactful projects.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    Problem Solver
                  </div>
                  <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    Team Player
                  </div>
                  <div className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                    Quick Learner
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
              {/* Image placeholder */}
              <div className="w-72 h-72 rounded-full border-4 border-blue-400 bg-gray-700 flex items-center justify-center overflow-hidden shadow-lg">
                {/* Replace the div below with an <img src="your-image-url.jpg" ... /> when ready */}
                <img src="/assets/Pic.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;