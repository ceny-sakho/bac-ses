import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, BookOpenText, ClipboardCheck, Settings } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import { SynthesisViewer } from './synthesis/SynthesisViewer';
import { DevoirsViewer } from './devoirs/DevoirsViewer';

interface ChapterContentProps {
  objectives: string[];
  image: string;
}

export const ChapterContent: React.FC<ChapterContentProps> = ({
  objectives,
  image
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSynthesis, setShowSynthesis] = useState(false);
  const [showDevoirs, setShowDevoirs] = useState(false);

  // Extraire le niveau et la matière de l'URL
  const getChapterInfo = () => {
    const pathParts = location.pathname.split('/');
    const fullChapterId = pathParts[pathParts.length - 1];
    const chapterId = fullChapterId.split('-')[1]; // ex: "ch6"
    const level = fullChapterId.split('-')[0]; // ex: "terminale"
    
    // Extraire le numéro du chapitre
    const chapterNumber = parseInt(chapterId?.replace('ch', '') || '1');
    
    // Déterminer la matière en fonction du numéro de chapitre et du niveau
    let subject = '';
    if (level === 'seconde') {
      if (chapterNumber >= 1 && chapterNumber <= 3) {
        subject = 'science-eco';
      } else if (chapterNumber >= 4 && chapterNumber <= 5) {
        subject = 'socio';
      } else {
        subject = 'regards';
      }
    } else {
      // Première et Terminale
      if (chapterNumber >= 1 && chapterNumber <= 5) {
        subject = 'science-eco';
      } else if (chapterNumber >= 6 && chapterNumber <= 10) {
        subject = 'socio';
      } else {
        subject = 'regards';
      }
    }

    return { chapterId, level, subject };
  };

  const { chapterId, level, subject } = getChapterInfo();

  if (showSynthesis) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => setShowSynthesis(false)}
          className="mb-6 hover:bg-[#403E43] hover:text-white"
        >
          <BookOpenText className="mr-2 h-4 w-4" />
          Retour au chapitre
        </Button>
        <SynthesisViewer 
          chapterId={chapterId}
          level={level}
          subject={subject}
          image={image}
          onBackToChapter={() => setShowSynthesis(false)}
          onShowDevoirs={() => {
            setShowSynthesis(false);
            setShowDevoirs(true);
          }}
        />
      </div>
    );
  }

  if (showDevoirs) {
    return (
      <div>
        <Button 
          variant="ghost" 
          onClick={() => setShowDevoirs(false)}
          className="ml-4 mt-4 hover:bg-[#403E43] hover:text-white"
        >
          <BookOpenText className="mr-2 h-4 w-4" />
          Retour au chapitre
        </Button>
        <DevoirsViewer 
          chapterId={chapterId}
          level={level}
          subject={subject}
          image={image}
          onBackToChapter={() => setShowDevoirs(false)}
          onShowSynthesis={() => {
            setShowDevoirs(false);
            setShowSynthesis(true);
          }}
        />
      </div>
    );
  }

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
        <Button size="lg" className="bg-[#B69B7D] hover:bg-[#9F876C] flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          DÉCOUVRIR LE COURS
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white"
          onClick={() => setShowSynthesis(true)}
        >
          <BookOpenText className="w-5 h-5" />
          SYNTHÈSE
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white"
          onClick={() => setShowDevoirs(true)}
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
        <Button 
          size="lg" 
          variant="outline" 
          className="flex items-center gap-2 bg-gris-sideral text-white hover:bg-gris-sideral/90"
          onClick={() => navigate('/methodologie', { state: { image } })}
        >
          <Settings className="w-5 h-5" />
          MÉTHODOLOGIE
        </Button>
      </div>
    </main>
  );
};