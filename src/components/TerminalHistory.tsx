import React from 'react';
import type { TerminalHistory as HistoryType } from '../types/terminal';

interface TerminalHistoryProps {
  history: HistoryType[];
}

const TerminalHistory: React.FC<TerminalHistoryProps> = ({ history }) => {
  // Function to render directory listings with color
  const renderOutput = (command: string, output: string) => {
    // Check if this is an 'ls' command output
    if (command.trim().toLowerCase() === 'ls') {
      // Split the output by directories
      const directories = output.trim().split(/\s+/);
      
      return (
        <div className="flex flex-wrap">
          {directories.map((dir, index) => (
            dir && <span key={index} className="mr-4 text-blue-400">{dir}</span>
          ))}
        </div>
      );
    }
    
    // For all other commands, return the output as is
    return <div className="ml-4 whitespace-pre-wrap">{output}</div>;
  };

  return (
    <>
      {history.map((entry, i) => (
        <div key={i} className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-[var(--neon-blue)] glow-blue">visitor@portfolio:~$</span>
            <span>{entry.command}</span>
          </div>
          {renderOutput(entry.command, entry.output)}
        </div>
      ))}
    </>
  );
};

export default TerminalHistory;