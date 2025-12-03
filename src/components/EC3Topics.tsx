import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { TopicsTable } from './ec3/TopicsTable';
import { getTopicsByChapter } from '../data/ec3Topics';

interface EC3TopicsProps {
  chapter: string;
  title: string;
}

export const EC3Topics: React.FC<EC3TopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();
  const topics = getTopicsByChapter(chapter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 hover:bg-gris-sideral hover:text-white mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Button>

      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      <TopicsTable topics={topics} chapter={chapter} />
    </div>
  );
};