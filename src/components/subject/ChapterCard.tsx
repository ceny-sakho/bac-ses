import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ChapterCardProps {
  id: string;
  title: string;
  level: string;
  image: string;
  onClick: () => void;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ id, title, level, image, onClick }) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <img
          src={image.startsWith('/') ? image : `https://images.unsplash.com/${image}`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-500">Niveau {level}</p>
      </CardContent>
    </Card>
  );
};