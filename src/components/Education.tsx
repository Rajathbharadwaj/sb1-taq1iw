import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2016 - 2018",
    details: "Focus on Artificial Intelligence and Distributed Systems"
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    school: "University of California, Berkeley",
    period: "2012 - 2016",
    details: "Minor in Mathematics"
  }
];

export default function Education() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <GraduationCap className="text-blue-600" />
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-blue-600 mb-1">{edu.school}</p>
                <p className="text-gray-600 text-sm">{edu.details}</p>
              </div>
              <div className="mt-2 md:mt-0 text-gray-600">
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}