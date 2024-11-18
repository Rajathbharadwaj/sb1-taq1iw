import React from 'react';
import { Rocket, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built a scalable e-commerce platform using React, Node.js, and MongoDB",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "AWS"],
    link: "https://github.com"
  },
  {
    title: "AI Chat Application",
    description: "Developed a real-time chat application with AI-powered responses",
    technologies: ["Python", "TensorFlow", "WebSocket", "React", "Docker"],
    link: "https://github.com"
  },
  {
    title: "Portfolio Analytics Dashboard",
    description: "Created a responsive dashboard for tracking investment portfolios",
    technologies: ["Vue.js", "D3.js", "Firebase", "TypeScript"],
    link: "https://github.com"
  }
];

export default function Projects() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Rocket className="text-blue-600" />
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}