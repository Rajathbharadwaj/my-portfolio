import React, { useState } from 'react';
import { autocomplete } from '../utils/autocomplete';

interface TerminalPromptProps {
  input: string;
  inputRef: React.RefObject<HTMLInputElement>;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  input,
  inputRef,
  setInput,
  handleSubmit,
  handleKeyDown
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle tab key for autocomplete
    if (e.key === 'Tab') {
      e.preventDefault(); // Prevent focus change
      const result = autocomplete(input);
      setInput(result.completed);
      setSuggestions(result.suggestions);
      setShowSuggestions(result.showSuggestions);
    }
    // Hide suggestions on any other key
    else if (showSuggestions && e.key !== 'Tab') {
      setShowSuggestions(false);
    }
    
    // Pass the event to the parent handler for history navigation
    if (handleKeyDown && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      handleKeyDown(e);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    // For commands
    if (!input.includes(' ')) {
      setInput(suggestion + (suggestion === 'cd' ? ' ' : ''));
    }
    // For cd arguments
    else {
      const command = input.split(' ')[0];
      setInput(`${command} ${suggestion}`);
    }
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <span className="text-[var(--neon-blue)] glow-blue">visitor@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-[var(--neon-green)]"
          autoFocus
        />
      </form>

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute left-0 mt-1 w-full max-h-48 overflow-auto bg-gray-900 border border-gray-700 rounded shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-800 text-[var(--neon-green)]"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TerminalPrompt;