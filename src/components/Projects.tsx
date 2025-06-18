import React from 'react';
import { useTheme } from '../context/ThemeContext.tsx';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  longDescription: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with real-time inventory",
    image: "/images/1-R5a_9-7R.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://happy-shpo.vercel.app/",
    longDescription: "A full-featured e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics dashboard."
  },
  {
    title: "Adaa Dashboard",
    description: "Enterprise Solution",
    image: "/images/dashboard.png",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    link: "https://www.realsoft-me.com/adaa/",
    longDescription: "Integrated system for patient records, scheduling, and billing for healthcare providers."
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile App",
    image: "/images/planfit.png",
    tags: ["Python", "TensorFlow", "FastAPI"],
    link: "https://apps.apple.com/us/app/planfit-gym-workout-planner/id1511876936",
    longDescription: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics."
  },
  {
    title: "Employee Management System",
    description: "Enterprise Solution",
    image: "/images/7-Bwg5-BUw.png",
    tags: ["React", "GraphQL", "PostgreSQL"],
    link: "https://grow-software.vercel.app/",
    longDescription: "Property listing, management, and analytics platform for real estate agencies."
  },
  {
    title: "Maintenance Management System",
    description: "Enterprise Solution",
    image: "/images/stephano.png",
    tags: ["Flutter", "Firebase", "REST API"],
    link: "https://mms.stephanosbakedgoods.com/",
    longDescription: "Comprehensive inventory tracking and management solution for manufacturing businesses."
  },
  {
    title: "Watford Tutoring Academy animation",
    description: "Web Application",
    image: "/images/watford.png",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    link: "http://watford-tutoring-aca.s3-website.eu-west-2.amazonaws.com/",
    longDescription: "Providing exceptional tutoring services in English, Maths, and Science with a team of experienced educators"
  },
  {
    title: "Ayzeen",
    description: "Mobile App",
    image: "/images/3.png",
    tags: ["Django", "React", "AWS"],
    link: "https://apps.apple.com/il/app/ayzeen-%D8%B9%D8%A7%D9%8A%D8%B2%D9%8A%D9%86/id1571568949",
    longDescription: "Online delivery and shopping application"
  },
  {
    title: "Academic Potential",
    description: "Web Application",
    image: "/images/7-Bwg5-BUw.png",
    tags: ["React", "Three.js", "GSAP"],
    link: "http://watford-tutoring-aca1.s3-website.eu-west-2.amazonaws.com/",
    longDescription: "Unlock Your Academic Potential, with our expert tutors."
  }
];

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className={`text-3xl font-extrabold sm:text-4xl transition-colors duration-200 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Projects
          </h2>
          <p className={`mt-4 text-lg transition-colors duration-200 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-500'
          }`}>
            A collection of my recent work and personal projects
          </p>
        </div>

        <div className="mt-12 grid gap-16 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block mx-auto w-[320px] h-[320px] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ maxWidth: 340 }}
            >
              <div className="relative w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300">
                  <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500 text-center px-4 flex flex-col items-center justify-center h-full w-full">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                    <p className="text-md text-gray-200 mb-2 drop-shadow-lg">{project.description}</p>
                    <p className="text-sm text-gray-300 mb-4 drop-shadow-lg">{project.longDescription}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block px-4 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg">View Project</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 