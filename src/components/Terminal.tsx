import React from 'react';
import Typewriter from 'typewriter-effect';
import { useTerminal } from '../hooks/useTerminal';
import TerminalPrompt from './TerminalPrompt';
import TerminalHistory from './TerminalHistory';

const Terminal: React.FC = () => {
  const { history, input, inputRef, setInput, handleSubmit, handleKeyDown } = useTerminal();

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-[var(--neon-green)] p-4 font-mono relative">
      <div className="scanline"></div>
      <div className="mb-8 glow">
        <Typewriter
          options={{
            strings: ['Welcome to my portfolio terminal', 'Type "help" to see available commands'],
            autoStart: true,
            loop: false,
            delay: 50,
          }}
        />
      </div>

      <div className="space-y-2">
        <TerminalHistory history={history} />
        <TerminalPrompt
          input={input}
          inputRef={inputRef}
          setInput={setInput}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Terminal;