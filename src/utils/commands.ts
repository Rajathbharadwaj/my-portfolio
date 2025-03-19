import { NavigateFunction } from 'react-router-dom';
import { handleCd } from '../commands/cd';
import { handleLs } from '../commands/ls';
import { handleSudo } from '../commands/sudo';

const HELP_TEXT = `Available commands:
  ls          - List directory contents
  cd about    - Navigate to about page
  cd projects - Navigate to projects page
  cd contact  - Navigate to contact page
  cd resume   - Navigate to resume page
  cd youtube  - Open NeuralTalk YouTube channel
  cd ..       - Return to home directory
  sudo        - Request administrative access
  clear       - Clear terminal history
  help        - Show this help message`;

export const executeCommand = (command: string, navigate: NavigateFunction): string => {
  const [cmd, ...args] = command.toLowerCase().split(' ');

  switch (cmd) {
    case 'cd':
      return handleCd(args, navigate);
    case 'ls':
      return handleLs(args);
    case 'sudo':
      return handleSudo(args);
    case 'help':
      return HELP_TEXT;
    case 'clear':
      window.location.reload();
      return '';
    default:
      return `Command not found: ${command}. Type 'help' for available commands.`;
  }
};