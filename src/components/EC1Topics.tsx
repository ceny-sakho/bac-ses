import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { ec1Topics } from '@/data/ec1';
import { EC1TopicsProps } from '@/types/ec1';
import { TopicsTable } from './shared/TopicsTable';

export const EC1Topics: React.FC<EC1TopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();
  const topics = ec1Topics[chapter] || [];

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
      
      <TopicsTable topics={topics} />
    </div>
  );
};