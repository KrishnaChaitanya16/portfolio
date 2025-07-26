import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

// Define a type for the project object
interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  category: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'Vitalia',
      description: 'Vitalia is a health and wellness platform.',
      longDescription: 'Vitalia is a comprehensive health and wellness platform designed to help users track, manage, and improve their overall well-being. It integrates various health metrics and provides actionable insights.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      features: [
        'Health tracking',
        'Personalized insights',
        'User-friendly dashboard',
        'Secure data management'
      ],
      githubUrl: 'https://github.com/KrishnaChaitanya16/Vitalia',
      category: 'Mobile App'
    },
    {
      title: 'Manas Mythri - Medical Chatbot',
      description: 'A chatbot for medical diagnosis and recommendations, built with Python and Jupyter Notebook.',
      longDescription: 'This medical chatbot provides primary care, emergency assistance, health monitoring, mental health support, and medication management. It uses AI to assist users with health-related inquiries and recommendations.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnoCCe2_Ctjw7DC54dH9rc_mJC-nJsAhyA7A&s',
      technologies: ['Python', 'Jupyter Notebook', 'AI', 'Healthcare'],
      features: [
        'Primary care and symptom assessment',
        'Emergency assistance',
        'Health monitoring and tracking',
        'Mental health support',
        'Medication management'
      ],
      githubUrl: 'https://github.com/KrishnaChaitanya16/medical-chatbot',
      category: 'AI/Healthcare'
    },
    {
      title: 'SymJam',
      description: 'A collaborative music application built with Flutter that enables real-time music collaboration.',
      longDescription: 'SymJam is a comprehensive music collaboration platform that allows musicians to create, share, and collaborate on music projects in real-time. The app features voice/video calling, real-time synchronization, and seamless file sharing capabilities.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Flutter', 'Agora RTC', 'Firebase', 'Dart', 'Real-time Database'],
      features: [
        'Real-time music collaboration',
        'Voice and video calling integration',
        'File sharing and synchronization',
        'User authentication and profiles',
        'Cross-platform compatibility'
      ],
      githubUrl: 'https://github.com/KrishnaChaitanya16/Musicprofileapp',
      category: 'Mobile App'
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
    <section id="projects" ref={ref} className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group perspective-1000 block ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              tabIndex={0}
            >
              <div
                className="relative transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180 h-96"
                onClick={e => {
                  // Prevent Details button from triggering card link
                  if ((e.target as HTMLElement).closest('.details-btn')) return;
                }}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="h-full bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-blue-500/80 text-white text-xs rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-600/50 text-gray-400 rounded text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="h-full bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.longDescription}</p>
                      <div className="space-y-2 mb-4">
                        <h4 className="text-sm font-semibold text-blue-400">Key Features:</h4>
                        <ul className="text-xs text-gray-300 space-y-1">
                          {project.features.slice(0, 3).map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center">
                              <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span
                        className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer opacity-70 pointer-events-none"
                      >
                        <Github size={16} />
                        Code
                      </span>
                      <button
                        type="button"
                        onClick={e => {
                          e.preventDefault();
                          setSelectedProject(project);
                        }}
                        className="details-btn flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-gray-900 transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
