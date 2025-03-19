import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4 glow-blue glitch">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};

export default Section;