import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="text-blue-600" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"]
  },
  {
    title: "Backend",
    icon: <Server className="text-blue-600" />,
    skills: ["Node.js", "Python", "Java", "REST APIs", "GraphQL"]
  },
  {
    title: "Database",
    icon: <Database className="text-blue-600" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    title: "Tools & Others",
    icon: <Code2 className="text-blue-600" />,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Agile"]
  }
];

export default function Skills() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
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