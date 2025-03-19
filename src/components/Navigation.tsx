import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal as TerminalIcon } from 'lucide-react';

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 left-4 z-50">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 bg-opacity-20 rounded hover:bg-opacity-30 transition-all"
      >
        <TerminalIcon className="w-4 h-4" />
        <span>cd ..</span>
      </button>
    </div>
  );
};

export default Navigation;