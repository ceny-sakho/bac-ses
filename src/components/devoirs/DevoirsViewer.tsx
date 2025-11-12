import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, BookOpenText, ClipboardCheck } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { devoirsData } from '@/data/devoirsData';

interface DevoirsViewerProps {
  chapterId: string;
  level: string;
  subject: string;
  image: string;
  onBackToChapter: () => void;
  onShowSynthesis: () => void;
}

export const DevoirsViewer: React.FC<DevoirsViewerProps> = ({
  chapterId,
  level,
  subject,
  image,
  onBackToChapter,
  onShowSynthesis
}) => {
  const navigate = useNavigate();
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

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button 
          size="lg" 
          className="bg-[#B69B7D] hover:bg-[#9F876C] flex items-center gap-2"
          onClick={onBackToChapter}
        >
          <BookOpen className="w-5 h-5" />
          DÉCOUVRIR LE COURS
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white"
          onClick={onShowSynthesis}
        >
          <BookOpenText className="w-5 h-5" />
          SYNTHÈSE
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="flex items-center gap-2 bg-[#403E43] text-white cursor-default"
        >
          <ClipboardCheck className="w-5 h-5" />
          DEVOIRS CORRIGÉS
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white"
          onClick={() => navigate('/sujets-bac')}
        >
          <GraduationCap className="w-5 h-5" />
          SUJETS BAC
        </Button>
      </div>
    </main>
  );
};
