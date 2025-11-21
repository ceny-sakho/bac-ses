import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  const devoirKey = `${level}-${chapterId}`;
  const devoirs = devoirsData[devoirKey] || [];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="order-2 md:order-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Devoirs corrigés
            </h2>
            
            <Tabs defaultValue="devoir1" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="devoir1" className="flex-1" onClick={() => navigate('/devoir1')}>Devoir 1</TabsTrigger>                <TabsTrigger value="devoir2" className="flex-1">Devoir 2</TabsTrigger>
                <TabsTrigger value="devoir2" className="flex-1" onClick={() => navigate('/devoir2')}>Devoir 2</TabsTrigger>
                              <TabsTrigger value="devoir3" className="flex-1" onClick={() => navigate('/devoir3')}>Devoir 3</TabsTrigger></TabsList>

              <TabsContent value="devoir1" className="mt-0">
                {devoirs[0] ? (
                  <div className="w-full">
                    <iframe
                      src={devoirs[0].pdfPath}
                      className="w-full h-[600px] rounded-lg border"
                      title={devoirs[0].title}
                    />
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Aucun PDF disponible pour ce devoir. Ajoutez-le via GitHub.
                  </p>
                )}
              </TabsContent>

              <TabsContent value="devoir2" className="mt-0">
                {devoirs[1] ? (
                  <div className="w-full">
                    <iframe
                      src={devoirs[1].pdfPath}
                      className="w-full h-[600px] rounded-lg border"
                      title={devoirs[1].title}
                    />
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Aucun PDF disponible pour ce devoir. Ajoutez-le via GitHub.
                  </p>
                )}
              </TabsContent>

              <TabsContent value="devoir3" className="mt-0">
                {devoirs[2] ? (
                  <div className="w-full">
                    <iframe
                      src={devoirs[2].pdfPath}
                      className="w-full h-[600px] rounded-lg border"
                    />
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Aucun PDF disponible pour ce devoir. Ajoutez-le via GitHub.
                  </p>
                )}
              </TabsContent>
            </Tabs>
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
