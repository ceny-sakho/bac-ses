import React from 'react';
import { EC1Topic } from '@/types/ec1';
import { CorrigeCell, useCorrigeAccess } from '@/components/corrige/CorrigeCell';

interface TopicsTableProps {
  topics: EC1Topic[];
  chapter: string;
}

const TopicRow: React.FC<{ topic: EC1Topic; chapter: string; index: number }> = ({ topic, chapter, index }) => {
  const { openDialog, dialog } = useCorrigeAccess('ec1', chapter, index + 1);

  return (
    <tr
      onClick={() => openDialog()}
      className="hover:bg-gris-sideral hover:text-white cursor-pointer transition-colors duration-200"
    >
      <td className="px-6 py-4">{topic.question}</td>
      <td className="px-6 py-4">{topic.year}</td>
      <td className="px-6 py-4">{topic.location}</td>
      <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
        <CorrigeCell type="ec1" chapter={chapter} sujetNumber={index + 1} />
      </td>
      <td className="hidden">{dialog}</td>
    </tr>
  );
};

export const TopicsTable: React.FC<TopicsTableProps> = ({ topics, chapter }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question EC1</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lieu</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Corrigé</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {topics.map((topic, index) => (
            <TopicRow key={index} topic={topic} chapter={chapter} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
