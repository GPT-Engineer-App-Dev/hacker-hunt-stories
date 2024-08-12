import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchStories = async (query = '') => {
  const timestamp24HoursAgo = Math.floor(Date.now() / 1000) - 86400; // 86400 seconds in 24 hours
  const url = `https://hn.algolia.com/api/v1/search?tags=story&numericFilters=created_at_i>${timestamp24HoursAgo}&hitsPerPage=100&query=${query}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useHackerNewsStories = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['hackerNewsStories', searchQuery],
    queryFn: () => fetchStories(searchQuery),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const searchStories = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    refetch();
  }, [searchQuery, refetch]);

  return {
    stories: data?.hits || [],
    isLoading,
    searchStories,
  };
};