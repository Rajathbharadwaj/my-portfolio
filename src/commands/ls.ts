export const handleLs = (args: string[]): string => {
  const directories = [
    'about',
    'projects',
    'contact',
    'resume',
    'youtube'
  ];

  // Format each directory with consistent spacing
  const formattedDirs = directories.map(dir => {
    const dirName = `${dir}/`.padEnd(12); // Increase padding slightly for better alignment
    // Using a plain string instead of ANSI color codes that don't work in the browser
    return dirName;
  });

  // Join with consistent spacing and add a newline at the end
  return formattedDirs.join('') + '\n';
};