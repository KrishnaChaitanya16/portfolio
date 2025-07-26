import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Star, AlignCenterVertical as Certificate } from 'lucide-react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      title: 'JEE Mains 2023',
      subtitle: '99.34 Percentile',
      description: 'Achieved exceptional performance in one of India\'s most competitive engineering entrance examinations.',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      glowColor: 'shadow-yellow-500/25'
    },
    {
      title: 'Hackstack 2024',
      subtitle: 'Top Performer - IIT Guwahati',
      description: 'Recognized as a top performer in the prestigious hackathon conducted by IIT Guwahati.',
      icon: Award,
      color: 'from-blue-400 to-purple-500',
      glowColor: 'shadow-blue-500/25'
    },
    {
      title: 'Winter of Code 4.0',
      subtitle: 'Top Performer - IIIT Kalyani',
      description: 'Distinguished performance in the open-source contribution program by IIIT Kalyani.',
      icon: Star,
      color: 'from-green-400 to-teal-500',
      glowColor: 'shadow-green-500/25'
    },
    {
      title: 'React.js Essential Training',
      subtitle: 'Certificate Completion',
      description: 'Successfully completed comprehensive React.js training course with hands-on projects.',
      icon: Certificate,
      color: 'from-purple-400 to-pink-500',
      glowColor: 'shadow-purple-500/25'
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

  return (
    <section id="achievements" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`group ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`relative bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg ${achievement.glowColor} hover:scale-105`}>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${achievement.color} rounded-lg shadow-lg`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                        <h4 className={`text-lg font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-3`}>
                          {achievement.subtitle}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>

                    {/* Achievement badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-3 h-3 bg-gradient-to-r ${achievement.color} rounded-full animate-pulse`}></div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                99.34%
              </div>
              <div className="text-gray-400 text-sm">JEE Percentile</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                2+
              </div>
              <div className="text-gray-400 text-sm">Hackathons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                1
              </div>
              <div className="text-gray-400 text-sm">Open Source Program</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                1+
              </div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;