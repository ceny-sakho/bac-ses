import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { devoirsData } from '@/data/devoirsData';

interface DevoirsViewerProps {
  chapterId: string;
  level: string;
  subject: string;
  image: string;
}

export const DevoirsViewer: React.FC<DevoirsViewerProps> = ({
  chapterId,
  level,
  subject,
  image
}) => {
  const [selectedDevoir, setSelectedDevoir] = useState<string | null>(null);

  const devoirKey = `${level}-${chapterId}`;
  const devoirs = devoirsData[devoirKey] || [];

  if (selectedDevoir) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Card className="bg-white shadow-sm">
          <iframe
            src={selectedDevoir}
            className="w-full h-[800px] rounded-lg"
            title="Devoir corrigé"
          />
        </Card>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="order-2 md:order-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Devoirs corrigés
            </h2>
            <div className="space-y-4">
              {devoirs.length === 0 ? (
                <p className="text-gray-500">Aucun devoir disponible pour ce chapitre</p>
              ) : (
                devoirs.map((devoir) => (
                  <Card
                    key={devoir.id}
                    className="bg-[#B69B7D] hover:bg-[#9F876C] transition-colors cursor-pointer p-6 text-center"
                    onClick={() => setSelectedDevoir(devoir.pdfPath)}
                  >
                    <h3 className="text-white text-lg font-medium">{devoir.title}</h3>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="rounded-lg overflow-hidden">
            <img
              src={image}
              alt="Illustration du chapitre"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
