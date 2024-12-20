import React from 'react';
import { Button } from "@/components/ui/button";

interface ChapterContentProps {
  objectives: string[];
  image: string;
}

export const ChapterContent: React.FC<ChapterContentProps> = ({
  objectives,
  image
}) => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="order-2 md:order-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Objectifs d'apprentissage
            </h2>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <span className="text-gray-400">•</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={image}
              alt="Illustration du chapitre"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button size="lg" className="bg-[#B69B7D] hover:bg-[#9F876C]">
          DÉCOUVRIR LE COURS
        </Button>
      </div>
    </main>
  );
};