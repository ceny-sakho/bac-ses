import React from 'react';
import { DissertationTopic } from '@/types/dissertation';
import { CorrigeCell } from '@/components/corrige/CorrigeCell';

interface DissertationTableProps {
  topics: DissertationTopic[];
  onTopicClick: (topic: DissertationTopic, index: number) => void;
}

export const DissertationTable: React.FC<DissertationTableProps> = ({ topics, onTopicClick }) => {
  // Derive chapter from any topic location via context? Need chapter prop.
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question de dissertation</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lieu</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Corrigé</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {topics.map((topic, index) => (
            <tr 
              key={index}
              onClick={() => onTopicClick(topic, index)}
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