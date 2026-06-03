import React from 'react';
import { useAppNavigation } from '@/contexts/NavigationContext';
import { CorrigeCell } from '@/components/corrige/CorrigeCell';

interface Topic {
  question: string;
  year: string;
  location: string;
}

interface TopicsTableProps {
  topics: Topic[];
  chapter: string;
}

export const TopicsTable: React.FC<TopicsTableProps> = ({ topics, chapter }) => {
  const { push } = useAppNavigation();

  const handleTopicClick = (index: number) => {
    push(`/ec3/${chapter}/sujet/${index + 1}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question EC3</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lieu</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Corrigé</th>
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
              <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                <CorrigeCell type="ec3" chapter={chapter} sujetNumber={index + 1} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};