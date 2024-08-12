import React from 'react';
import { ArrowUpCircle, ExternalLink, Clock } from 'lucide-react';

const StoryItem = ({ story }) => {
  const storyAge = new Date(story.created_at).toLocaleString();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-blue-200">
      <h2 className="text-xl font-semibold mb-2 text-blue-800">{story.title}</h2>
      <div className="flex items-center justify-between text-sm text-blue-600 mb-2">
        <div className="flex items-center">
          <ArrowUpCircle className="w-4 h-4 mr-1 text-blue-500" />
          <span>{story.points} points</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1 text-blue-500" />
          <span>{storyAge}</span>
        </div>
      </div>
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
      >
        Read more
        <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
};

export default StoryItem;