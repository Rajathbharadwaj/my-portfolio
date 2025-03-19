import React from 'react';

const GitHubContributions: React.FC = () => {
  // Generate mock contribution data (replace with real GitHub API data if needed)
  const generateContributions = () => {
    const contributions = [];
    for (let i = 0; i < 357; i++) {
      contributions.push({
        count: Math.floor(Math.random() * 10),
        date: new Date(Date.now() - (356 - i) * 24 * 60 * 60 * 1000)
      });
    }
    return contributions;
  };

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-gray-800';
    if (count <= 3) return 'bg-green-900';
    if (count <= 6) return 'bg-green-700';
    return 'bg-green-500';
  };

  const contributions = generateContributions();

  return (
    <div className="p-4 border border-green-500/20 rounded-lg bg-black/50">
      <h3 className="text-sm mb-4 text-gray-400">GitHub Contributions</h3>
      <div className="grid grid-cols-[repeat(51,1fr)] gap-1">
        {contributions.map((day, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)} 
              hover:ring-2 hover:ring-green-400 transition-all duration-200
              cursor-pointer group relative`}
          >
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
              hidden group-hover:block bg-black border border-green-500/20 
              rounded p-2 text-xs whitespace-nowrap">
              {day.count} contributions on {day.date.toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubContributions;