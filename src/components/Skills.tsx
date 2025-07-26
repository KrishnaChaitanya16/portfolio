import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: '/java.png', color: 'from-orange-500 to-red-500' },
        { name: 'Python', icon: '/python.png', color: 'from-blue-500 to-yellow-500' },
        { name: 'C++', icon: '/c-.png', color: 'from-blue-600 to-purple-600' },
        { name: 'C', icon: '/c.png', color: 'from-blue-400 to-cyan-400' }
      ]
    },
    {
      title: 'Mobile',
      skills: [
        { name: 'Flutter', icon: '/image.png', color: 'from-blue-400 to-cyan-400' },
        { name: 'Firebase', icon: '/firebase.png', color: 'from-orange-500 to-yellow-500' },
        { name: 'Hive', icon: '/hive.jpeg', color: 'from-purple-500 to-pink-500' },
        { name: 'Provider', icon: '/dart.png', color: 'from-green-500 to-blue-500' }
      ]
    },
    {
      title: 'Web',
      skills: [
        { name: 'ReactJS', icon: '/reactjs.png', color: 'from-cyan-400 to-blue-500' },
        { name: 'HTML', icon: '/html.png', color: 'from-orange-500 to-red-500' },
        { name: 'CSS', icon: '/css.jpeg', color: 'from-blue-500 to-purple-500' },
        { name: 'JavaScript', icon: '/js.png', color: 'from-yellow-400 to-orange-500' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: '/sql.png', color: 'from-blue-600 to-cyan-600' },
        { name: 'PostgreSQL', icon: '/postgresql.jpeg', color: 'from-blue-700 to-gray-700' },
        { name: 'Pinecone', icon: '/pinecon.jpeg', color: 'from-green-500 to-teal-500' }
      ]
    },
    {
      title: 'AI/ML',
      skills: [
        { name: 'Llama ', icon: '/meta.jpeg', color: 'from-purple-500 to-pink-500' },
        { name: 'Transformers', icon: '/hugging face.png', color: 'from-blue-500 to-purple-500' },
        { name: 'Generative AI', icon: '/genai.png', color: 'from-gradient-to-r from-purple-400 to-pink-400' }
      ]
    },
    {
      title: 'Tools/APIs',
      skills: [
        { name: 'Git', icon: '/git.png', color: 'from-orange-500 to-red-500' },
        { name: 'Gemini API', icon: '/gemini.png', color: 'from-blue-400 to-purple-400' },
        { name: 'Agora SDK', icon: '/agora.png', color: 'from-green-500 to-blue-500' },
        { name: 'Google Maps API', icon: '/googlemaps.png', color: 'from-green-400 to-blue-400' }
      ]
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
    <section id="skills" ref={ref} className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`space-y-6 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className={`flex items-center gap-3 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:scale-105 transition-transform duration-300 shadow-md`}> 
                    <img src={skill.icon} alt={skill.name + ' logo'} className="w-12 h-12 object-contain rounded-full bg-white p-1" />
                    <span className={`font-medium text-white`}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;