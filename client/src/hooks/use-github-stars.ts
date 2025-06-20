import { useState, useEffect } from 'react';

interface GitHubRepoData {
  stargazers_count: number;
}

export function useGitHubStars(repoUrl: string) {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatStarCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  useEffect(() => {
    const fetchStars = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(repoUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch repository data');
        }
        
        const data: GitHubRepoData = await response.json();
        setStars(data.stargazers_count);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Don't set a fallback value - let it remain null on error
        setStars(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
    
    // Refresh star count every 5 minutes
    const interval = setInterval(fetchStars, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [repoUrl]);

  return {
    stars,
    formattedStars: stars ? formatStarCount(stars) : null,
    loading,
    error
  };
} 