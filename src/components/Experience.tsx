import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Tech Solutions Inc",
    position: "Senior Software Engineer",
    period: "2020 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Improved system performance by 40% through optimization",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    company: "Digital Innovations",
    position: "Software Engineer",
    period: "2018 - 2020",
    description: [
      "Developed full-stack applications using React and Node.js",
      "Implemented CI/CD pipelines reducing deployment time by 50%",
      "Collaborated with design team to improve UX"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Building2 className="text-blue-600" />
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar size={16} className="mr-1" />
                  {exp.period}
                </div>
              </div>
              <p className="text-blue-600 mb-2">{exp.company}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}