import { NavigateFunction } from 'react-router-dom';

export const handleCd = (args: string[], navigate: NavigateFunction): string => {
  const destination = args[0];
  switch (destination) {
    case 'about':
      navigate('/about');
      return 'Navigating to about page...';
    
    case 'projects':
      navigate('/projects');
      return 'Navigating to projects page...';
    
    case 'contact':
      navigate('/contact');
      return 'Navigating to contact page...';
    
    case 'resume':
      navigate('/resume');
      return 'Navigating to resume page...';
    
    case '..':
      navigate('/');
      return 'Returning to home directory...';
    
    case 'youtube':
      window.open('https://www.youtube.com/@neuraltalk', '_blank');
      return 'Opening NeuralTalk YouTube channel...';
    
    default:
      return `Directory not found: ${destination}`;
  }
};