import React from 'react';
import Card from './Card';

interface ProjectCardProps {
  title: string;
  description: string;
  tech?: string[];
  period?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, period }) => {
  return (
    <Card>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="mb-3">{description}</p>
      {tech && (
        <p className="text-sm mb-2">
          <span className="text-blue-400">Tech Stack: </span>
          {tech.join(', ')}
        </p>
      )}
      {period && (
        <p className="text-sm text-gray-400">{period}</p>
      )}
    </Card>
  );
};

export default ProjectCard;