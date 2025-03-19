import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { TerminalHistory } from '../types/terminal';
import { executeCommand } from '../utils/commands';

export const useTerminal = () => {
  const [history, setHistory] = useState<TerminalHistory[]>([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Function to navigate through command history
  const navigateHistory = (direction: 'up' | 'down') => {
    if (commandHistory.length === 0) return;
    
    if (direction === 'up') {
      // Calculate the new index, but don't go below 0
      const newIndex = Math.max(0, historyIndex === -1 ? commandHistory.length - 1 : historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    } else if (direction === 'down') {
      // If we're at the end of history, clear the input
      if (historyIndex >= commandHistory.length - 1 || historyIndex === -1) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateHistory('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateHistory('down');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const output = executeCommand(input.trim(), navigate);
    setHistory(prev => [...prev, { command: input, output }]);
    
    // Add the command to history if it's not already the last command
    if (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== input) {
      setCommandHistory(prev => [...prev, input]);
    }
    
    // Reset history index and input
    setHistoryIndex(-1);
    setInput('');
  };

  return {
    history,
    input,
    inputRef,
    setInput,
    handleSubmit,
    handleKeyDown
  };
};