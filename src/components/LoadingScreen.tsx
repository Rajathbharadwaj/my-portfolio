import React, { useEffect, useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-[var(--dark-bg)] z-50 flex flex-col items-center justify-center">
      <TerminalIcon className="w-16 h-16 mb-8 animate-pulse text-[var(--neon-green)]" />
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-[var(--neon-green)] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="font-mono text-sm">
        <span className="text-[var(--neon-green)]">System boot:</span>
        <span className="ml-2">{progress}%</span>
      </div>
    </div>
  );
};

export default LoadingScreen;