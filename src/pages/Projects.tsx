import React from 'react';
import Typewriter from 'typewriter-effect';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/resume';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-500 p-4 font-mono overflow-y-auto">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Typewriter
            options={{
              strings: ['My Projects'],
              autoStart: true,
              loop: false,
              delay: 50,
            }}
          />
        </div>

        <Section title="Featured Projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              period={project.period}
            />
          ))}
        </Section>
      </div>
    </div>
  );
};

export default Projects;