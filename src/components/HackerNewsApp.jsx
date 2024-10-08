import React from 'react';
import StoryList from './StoryList';
import SearchBar from './SearchBar';
import { useHackerNewsStories } from '../hooks/useHackerNewsStories';

const HackerNewsApp = () => {
  const { stories, isLoading, searchStories } = useHackerNewsStories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Top 100 Hacker News Stories Today</h1>
      <SearchBar onSearch={searchStories} />
      <StoryList stories={stories} isLoading={isLoading} />
    </div>
  );
};

export default HackerNewsApp;