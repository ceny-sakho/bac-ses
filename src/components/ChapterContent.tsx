import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, BookOpenText, ClipboardCheck, Settings, Target } from "lucide-react";
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { SynthesisViewer } from './synthesis/SynthesisViewer';
import { DevoirsViewer } from './devoirs/DevoirsViewer';
import { CoursViewer } from './cours/CoursViewer';

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
  const [searchParams, setSearchParams] = useSearchParams();

  const normalizeChapterSlug = (slug: string) =>
    slug
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

  // L'onglet/vue actif vit dans l'URL (?view=cours|synthese|devoirs)
  // pour que window.history.back() restaure naturellement l'état précédent.
  const currentView = searchParams.get('view') ?? searchParams.get('tab');
  const showCours = currentView === 'cours';
  const showSynthesis = currentView === 'synthese';
  const showDevoirs = currentView === 'devoirs';

  const openView = (view: 'cours' | 'synthese' | 'devoirs', replace = false) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('tab');
    nextParams.set('view', view);
    setSearchParams(nextParams, { replace });
  };

  const goBack = () => window.history.back();

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

  if (showCours) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <CoursViewer 
          chapterId={chapterId}
          level={level}
          subject={subject}
          onBackToChapter={goBack}
        />
      </div>
    );
  }

  if (showSynthesis) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Button
            variant="ghost"
            onClick={goBack}
            className="hover:bg-[#403E43] hover:text-white"
          >
            <BookOpenText className="mr-2 h-4 w-4" />
            Retour au chapitre
          </Button>
          {objectives.map((_, i) => {
            const num = i + 1;
            const fullChapterId = normalizeChapterSlug(location.pathname.split('/').pop() || '');
            return (
              <Button
                key={num}
                variant="outline"
                onClick={() => navigate(`/objectif/${fullChapterId}/${num}`)}
                className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white"
              >
                <Target className="w-4 h-4" />
                OBJECTIF-{num}
              </Button>
            );
          })}
        </div>
        <SynthesisViewer 
          chapterId={chapterId}
          level={level}
          subject={subject}
          image={image}
          onBackToChapter={goBack}
          onShowDevoirs={() => openView('devoirs', true)}
        />
      </div>
    );
  }

  if (showDevoirs) {
    return (
      <div>
        <Button 
          variant="ghost" 
          onClick={goBack}
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
          onBackToChapter={goBack}
          onShowSynthesis={() => openView('synthese', true)}
        />
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 md:items-stretch">
        <div className="order-2 md:order-1 flex">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col w-full">
            <h2 className="text-2xl font-semibold mb-6">
              Objectifs d'apprentissage
            </h2>
            <ul className="space-y-4 flex-1">
              {objectives.map((objective, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <span className="text-gray-400">•</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-1 md:order-2 flex">
          <div className="rounded-lg overflow-hidden w-full">
            <img
              src={image}
              alt="Illustration du chapitre"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button 
          size="lg" 
          className="bg-[#B69B7D] hover:bg-[#9F876C] flex items-center gap-2"
          onClick={() => openView('cours')}
        >
          <BookOpen className="w-5 h-5" />
          DÉCOUVRIR LE COURS
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white"
          onClick={() => openView('synthese')}
        >
          <BookOpenText className="w-5 h-5" />
          SYNTHÈSE
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white"
          onClick={() => openView('devoirs')}
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