import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { examData } from '@/data/examQuestions';

interface DissertationTopicsProps {
  chapter: string;
  title: string;
}

export const DissertationTopics: React.FC<DissertationTopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();

  const getTopicsByChapter = () => {
    const chapterKey = `chapter${chapter}` as keyof typeof examData;
    return examData[chapterKey]?.dissertation || [];
  };

  const topics = getTopicsByChapter();

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
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question de dissertation</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lieu</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {topics.map((topic, index) => (
              <tr 
                key={index}
                className="hover:bg-gris-sideral hover:text-white cursor-pointer transition-colors duration-200"
              >
                <td className="px-6 py-4">{topic.question}</td>
                <td className="px-6 py-4">{topic.year}</td>
                <td className="px-6 py-4">{topic.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};