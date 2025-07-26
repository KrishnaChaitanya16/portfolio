import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Flutter Developer Intern',
      company: 'Know Your Trips',
      duration: 'May 2024 - June 2024',
      location: 'Remote',
      achievements: [
        'Implemented offline-first architecture using Hive database for seamless user experience',
        'Integrated Apple Sign-In authentication for iOS users',
        'Enhanced UI/UX design and polished app interface for better user engagement',
        'Optimized app performance and implemented responsive design patterns'
      ],
      skills: ['Flutter', 'Hive', 'Firebase', 'Apple Sign-In', 'UI/UX Design']
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
    <section id="experience" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-green-500 to-blue-500"></div>

          {experiences.map((experience, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Left side card (even index) */}
                {isLeft && (
                  <div className="w-full md:w-1/2 px-0 md:px-8 md:pr-16 flex md:flex-row-reverse">
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group w-full text-left">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">{experience.company}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm justify-center md:justify-end">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            {experience.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            {experience.location}
                          </div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-300 mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-gray-300 text-sm">
                              <CheckCircle size={16} className="mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Right side card (odd index) */}
                {!isLeft && (
                  <div className="w-full md:w-1/2 px-0 md:px-8 md:pl-16 flex md:flex-row">
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group w-full text-left">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">{experience.company}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm justify-center md:justify-start">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            {experience.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            {experience.location}
                          </div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-300 mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-gray-300 text-sm">
                              <CheckCircle size={16} className="mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Spacer for timeline alignment on desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;