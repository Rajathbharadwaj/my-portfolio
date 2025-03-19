// List of available commands
const COMMANDS = ['ls', 'cd', 'help', 'clear', 'sudo'];

// List of available directories for cd command
const DIRECTORIES = ['about', 'projects', 'contact', 'resume', 'youtube', '..'];

export interface AutocompleteResult {
  completed: string;
  suggestions: string[];
  showSuggestions: boolean;
}

/**
 * Autocomplete function for the terminal
 * @param input Current input text
 * @returns The autocomplete result containing completed text and suggestions
 */
export const autocomplete = (input: string): AutocompleteResult => {
  if (!input) return { completed: input, suggestions: [], showSuggestions: false };
  
  const parts = input.split(' ');
  const command = parts[0].toLowerCase();
  const arg = parts.length > 1 ? parts[1].toLowerCase() : '';

  // Autocomplete for commands (first word)
  if (parts.length === 1) {
    const matches = COMMANDS.filter(cmd => cmd.startsWith(command));
    
    if (matches.length === 1) {
      return { 
        completed: matches[0] + (matches[0] === 'cd' ? ' ' : ''),
        suggestions: [],
        showSuggestions: false
      };
    }
    
    // If multiple matches but exact match exists, return the exact match
    if (matches.includes(command)) {
      return { 
        completed: command,
        suggestions: [],
        showSuggestions: false
      };
    }
    
    // If multiple matches, show suggestions
    if (matches.length > 1) {
      return {
        completed: input,
        suggestions: matches,
        showSuggestions: true
      };
    }
    
    return { 
      completed: input,
      suggestions: [],
      showSuggestions: false
    };
  }
  
  // Autocomplete for 'cd' command arguments
  if (command === 'cd' && parts.length === 2) {
    const matches = DIRECTORIES.filter(dir => dir.startsWith(arg));
    
    if (matches.length === 1) {
      return {
        completed: `cd ${matches[0]}`,
        suggestions: [],
        showSuggestions: false
      };
    }
    
    // If multiple matches but exact match exists, return the exact match
    if (matches.includes(arg)) {
      return {
        completed: `cd ${arg}`,
        suggestions: [],
        showSuggestions: false
      };
    }
    
    // If multiple matches, show suggestions
    if (matches.length > 1) {
      return {
        completed: input,
        suggestions: matches,
        showSuggestions: true
      };
    }
  }
  
  return {
    completed: input,
    suggestions: [],
    showSuggestions: false
  };
}; 