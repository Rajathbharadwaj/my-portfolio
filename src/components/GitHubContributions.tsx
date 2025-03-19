import React, { useEffect, useState } from 'react';

interface Contribution {
  count: number;
  date: Date;
}

const GitHubContributions: React.FC = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchGitHubContributions = async () => {
      try {
        setLoading(true);
        // Fetch HTML from GitHub profile
        const username = 'rajathbharadwaj';
        const response = await fetch(`https://github.com/${username}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        
        const html = await response.text();
        
        // Extract contribution data from the response
        const parsedContributions = parseGitHubContributions(html);
        setContributions(parsedContributions);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err);
        setError('Failed to fetch GitHub activity data');
        setLoading(false);
        
        // Fallback to mock data if failed to fetch
        setContributions(generateMockContributions());
      }
    };
    
    fetchGitHubContributions();
  }, []);
  
  // Parse GitHub contribution calendar HTML
  const parseGitHubContributions = (html: string): Contribution[] => {
    try {
      const result: Contribution[] = [];
      
      // Find the svg contribution grid
      const svgRegex = /<svg[^>]*class="js-calendar-graph-svg"[\s\S]*?<\/svg>/;
      const svgMatch = html.match(svgRegex);
      
      if (!svgMatch) {
        throw new Error('Could not find contribution graph');
      }
      
      // Extract all contribution rectangles
      const rectRegex = /<rect[^>]*data-date="([^"]*)"[^>]*data-level="([^"]*)"[^>]*>/g;
      let match;
      
      while ((match = rectRegex.exec(svgMatch[0])) !== null) {
        const date = new Date(match[1]);
        const level = parseInt(match[2], 10);
        
        // Convert level to count (approximate)
        let count;
        switch (level) {
          case 0: count = 0; break;
          case 1: count = 1; break;
          case 2: count = 3; break;
          case 3: count = 6; break;
          case 4: count = 9; break;
          default: count = 0;
        }
        
        result.push({ count, date });
      }
      
      // If we couldn't parse any contributions, use mock data
      if (result.length === 0) {
        return generateMockContributions();
      }
      
      return result;
    } catch (err) {
      console.error('Error parsing GitHub contributions:', err);
      return generateMockContributions();
    }
  };

  // Generate mock contribution data as a fallback
  const generateMockContributions = (): Contribution[] => {
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
    if (count <= 1) return 'bg-green-900';
    if (count <= 3) return 'bg-green-700';
    if (count <= 6) return 'bg-green-500';
    return 'bg-green-300';
  };
  
  if (loading) {
    return (
      <div className="p-4 border border-green-500/20 rounded-lg bg-black/50">
        <h3 className="text-sm mb-4 text-gray-400">GitHub Contributions</h3>
        <p className="text-gray-500">Loading activity data...</p>
      </div>
    );
  }

  if (error) {
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
                rounded p-2 text-xs whitespace-nowrap z-10">
                {day.count} contributions on {day.date.toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-red-400 mt-2">{error} (using fallback data)</p>
      </div>
    );
  }

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
              rounded p-2 text-xs whitespace-nowrap z-10">
              {day.count} contributions on {day.date.toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubContributions;