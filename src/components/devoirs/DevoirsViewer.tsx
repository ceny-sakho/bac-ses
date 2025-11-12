import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { devoirsData } from '@/data/devoirsData';

interface DevoirsViewerProps {
  chapterId: string;
  level: string;
  subject: string;
}

export const DevoirsViewer: React.FC<DevoirsViewerProps> = ({
  chapterId,
  level,
  subject
}) => {
  const [selectedDevoir, setSelectedDevoir] = useState<string | null>(null);

  const devoirKey = `${level}-${chapterId}`;
  const devoirs = devoirsData[devoirKey] || [];

  const handleDevoirClick = (pdfPath: string) => {
    setSelectedDevoir(pdfPath);
  };

  const handleDownload = (pdfPath: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${title}.pdf`;
    link.click();
  };

  if (devoirs.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-8">
            <div className="text-center text-gray-500">
              <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg">Aucun devoir corrigé disponible pour ce chapitre</p>
              <p className="text-sm mt-2">Les devoirs seront ajoutés prochainement</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Devoirs corrigés</h2>
      
      {!selectedDevoir ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devoirs.map((devoir) => (
            <Card 
              key={devoir.id}
              className="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleDevoirClick(devoir.pdfPath)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#B69B7D]/10 rounded-lg">
                    <FileText className="w-6 h-6 text-[#B69B7D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{devoir.title}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(devoir.pdfPath, devoir.title);
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <Button 
            variant="ghost" 
            onClick={() => setSelectedDevoir(null)}
            className="mb-4 hover:bg-[#403E43] hover:text-white"
          >
            ← Retour aux devoirs
          </Button>
          <Card className="bg-white shadow-sm">
            <CardContent className="p-0">
              <iframe
                src={selectedDevoir}
                className="w-full h-[800px] rounded-lg"
                title="Devoir corrigé"
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
