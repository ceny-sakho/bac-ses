import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { ec2Topics } from '@/data/ec2Topics';
import { useAppNavigation } from '@/contexts/NavigationContext';
import { CorrigeCell } from '@/components/corrige/CorrigeCell';

interface EC2Topic {
  question: string;
  year: string;
  location: string;
}

interface EC2TopicsProps {
  chapter: string;
  title: string;
}

export const EC2Topics: React.FC<EC2TopicsProps> = ({ chapter, title }) => {
  const { back, getBacPath, push } = useAppNavigation();
  const topics = ec2Topics[chapter] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => back(getBacPath())}
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question EC2</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lieu</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Corrigé</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {topics.map((topic, index) => (
              <tr 
                key={index}
                onClick={() => push(`/ec2/${chapter}/sujet/${index + 1}`)}
                className="hover:bg-gris-sideral hover:text-white cursor-pointer transition-colors duration-200"
              >
                <td className="px-6 py-4">{topic.question}</td>
                <td className="px-6 py-4">{topic.year}</td>
                <td className="px-6 py-4">{topic.location}</td>
                <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                  <CorrigeCell type="ec2" chapter={chapter} sujetNumber={index + 1} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};