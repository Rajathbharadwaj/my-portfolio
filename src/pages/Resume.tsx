import React from 'react';
import Typewriter from 'typewriter-effect';
import Navigation from '../components/Navigation';
import { education, skills, experience, projects, contact, seminars } from '../data/resume';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-500 p-4 font-mono overflow-y-auto">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        <Typewriter
          options={{
            strings: ['My Resume'],
            autoStart: true,
            loop: false,
            delay: 50,
          }}
        />
        
        <div className="mt-8 space-y-8">
          {/* Education */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-blue-400">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border border-green-500 p-4 rounded-lg">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p>{edu.institution} - {edu.location}</p>
                  <p className="text-sm">{edu.period} {edu.gpa && `- GPA: ${edu.gpa}`}</p>
                  {edu.courses && (
                    <div className="mt-2">
                      <p className="text-sm text-blue-400">Courses:</p>
                      <p className="text-sm">{edu.courses.join(', ')}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-blue-400">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="border border-green-500 p-4 rounded-lg">
                  <h3 className="font-bold capitalize">{category}</h3>
                  <p className="mt-2">{items.join(', ')}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-blue-400">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index} className="border border-green-500 p-4 rounded-lg">
                  <h3 className="font-bold">{exp.title}</h3>
                  <p>{exp.company} - {exp.location}</p>
                  <p className="text-sm">{exp.period}</p>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-blue-400">Projects</h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="border border-green-500 p-4 rounded-lg">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                  {project.tech && (
                    <p className="mt-2 text-sm">
                      <span className="text-blue-400">Tech Stack: </span>
                      {project.tech.join(', ')}
                    </p>
                  )}
                  {project.period && (
                    <p className="mt-2 text-sm text-gray-400">{project.period}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Seminars */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-blue-400">Seminars & Tutorials</h2>
            <div className="space-y-4">
              {seminars.map((seminar, index) => (
                <div key={index} className="border border-green-500 p-4 rounded-lg">
                  <h3 className="font-bold">{seminar.title}</h3>
                  {seminar.institution && <p className="text-sm">{seminar.institution}</p>}
                  <a
                    href={seminar.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Watch Video →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-blue-400">Contact</h2>
            <div className="border border-green-500 p-4 rounded-lg space-y-2">
              <p>Email: <a href={`mailto:${contact.email}`} className="text-purple-400 hover:underline">{contact.email}</a></p>
              <p>Phone: {contact.phone}</p>
              <p>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">{contact.github}</a></p>
              <p>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">{contact.linkedin}</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;