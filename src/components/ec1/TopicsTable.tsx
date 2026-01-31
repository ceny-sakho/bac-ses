import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EC1Topic } from '@/types/ec1';

interface TopicsTableProps {
  topics: EC1Topic[];
  chapter: string;
}

export const TopicsTable: React.FC<TopicsTableProps> = ({ topics, chapter }) => {
  const navigate = useNavigate();

  const handleTopicClick = (index: number) => {
    navigate(`/ec1/${chapter}/sujet/${index + 1}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question EC1</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lieu</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {topics.map((topic, index) => (
            <tr 
              key={index}
              onClick={() => handleTopicClick(index)}
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
  );
};
