import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="cyber-card p-4 rounded-lg relative overflow-hidden">
      {children}
    </div>
  );
};

export default Card;