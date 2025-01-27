import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, BookOpenText } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import { SynthesisViewer } from './synthesis/SynthesisViewer';
import { NotionsViewer } from './notions/NotionsViewer';

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
  const [showNotions, setShowNotions] = useState(false);

  // Extraire le niveau et la matière de l'URL
  const getChapterInfo = () => {
    const pathParts = location.pathname.split('/');
    const chapterId = pathParts[pathParts.length - 1].split('-')[1];
    const level = pathParts[pathParts.length - 1].split('-')[0];
    
    let subject = '';
    if (location.pathname.includes('science-eco')) {
      subject = 'science-eco';
    } else if (location.pathname.includes('socio')) {
      subject = 'socio';
    } else if (location.pathname.includes('regards')) {
      subject = 'regards';
    }

    return { chapterId, level, subject };
  };

  const { chapterId, level, subject } = getChapterInfo();

  if (showNotions) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => setShowNotions(false)}
          className="mb-6 hover:bg-[#403E43] hover:text-white"
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Retour au chapitre
        </Button>
        <NotionsViewer 
          chapterId={chapterId}
          level={level}
          subject={subject}
        />
      </div>
    );
  }

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
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={image}
              alt="Illustration du chapitre"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button 
          size="lg" 
          className="bg-[#B69B7D] hover:bg-[#9F876C] flex items-center gap-2"
          onClick={() => setShowNotions(true)}
        >
          <BookOpen className="w-5 h-5" />
          NOTIONS
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
          onClick={() => navigate('/sujets-bac')}
        >
          <GraduationCap className="w-5 h-5" />
          SUJETS BAC
        </Button>
      </div>
    </main>
  );
};