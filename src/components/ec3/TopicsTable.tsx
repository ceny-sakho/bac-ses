import React from 'react';

interface Topic {
  question: string;
  year: string;
  location: string;
}

interface TopicsTableProps {
  topics: Topic[];
}

export const TopicsTable: React.FC<TopicsTableProps> = ({ topics }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question EC3</th>
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
  );
};