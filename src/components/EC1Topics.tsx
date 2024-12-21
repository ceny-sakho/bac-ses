import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface EC1TopicsProps {
  chapter: string;
  title: string;
}

export const EC1Topics: React.FC<EC1TopicsProps> = ({ chapter, title }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-gray-600">Les sujets pour ce chapitre seront bientôt disponibles.</p>
        </CardContent>
      </Card>
    </div>
  );
};