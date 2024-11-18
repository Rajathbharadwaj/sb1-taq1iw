import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-2">John Doe</h1>
            <h2 className="text-xl text-blue-100 mb-4">Senior Software Engineer</h2>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
              <MapPin size={16} />
              <span>San Francisco, CA</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="mailto:john@example.com" className="hover:text-blue-200 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}