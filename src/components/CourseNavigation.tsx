import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, BookOpen, FileText, PenTool } from "lucide-react";

const courseStructure = {
  Seconde: {
    "Science économique": [
      "Chapitre 1 : Comment les économistes, les sociologues et les politistes raisonnent-ils et travaillent-ils ?",
      "Chapitre 2 : Comment crée-t-on des richesses et comment les mesure-t-on ?",
      "Chapitre 3 : Comment se forment les prix sur un marché ?",
    ],
    "Sociologie / Science politique": [
      "Chapitre 4 : Comment devenons-nous des acteurs sociaux ?",
      "Chapitre 5 : Comment s'organise la vie politique ?",
    ],
    "Regards croisés": [
      "Chapitre 6 : Quelles relations entre diplôme, emploi et salaire ?",
    ],
  },
  Première: {
    "Science économique": [
      "Chapitre 1 : Comment un marché concurrentiel fonctionne-t-il ?",
      "Chapitre 2 : Comment les marchés imparfaitement concurrentiels fonctionnent-ils ?",
      "Chapitre 3 : Quelles sont les principales défaillances de marché ?",
      "Chapitre 4 : Comment les agents économiques se financent-ils ?",
      "Chapitre 5 : Qu'est-ce que la monnaie et comment est-elle créée ?",
    ],
    "Sociologie / Science politique": [
      "Chapitre 6 : Comment la socialisation contribue-t-elle à expliquer les différences de comportement des individus ?",
      "Chapitre 7 : Comment se construisent et évoluent les liens sociaux ?",
      "Chapitre 8 : Quels sont les processus sociaux qui contribuent à la déviance ?",
      "Chapitre 9 : Comment se forme et s'exprime l'opinion publique ?",
      "Chapitre 10 : Voter : une affaire individuelle ou collective ?",
    ],
    "Regards croisés": [
      "Chapitre 11 : Comment l'assurance et la protection sociale contribuent-elles à la gestion des risques dans les sociétés développées ?",
      "Chapitre 12 : Comment les entreprises sont-elles organisées et gouvernées ?",
    ],
  },
  Terminale: {
    "Science économique": [
      "Chapitre 1 : Quels sont les sources et les défis de la croissance économique ?",
      "Chapitre 2 : Quels sont les fondements du commerce international et de l'internationalisation de la production ?",
      "Chapitre 3 : Comment lutter contre le chômage ?",
      "Chapitre 4 : Comment expliquer les crises financières et réguler le système financier ?",
      "Chapitre 5 : Quelles politiques économiques dans le cadre européen ?",
    ],
    "Sociologie / Science politique": [
      "Chapitre 6 : Comment est structurée la société française actuelle ?",
      "Chapitre 7 : Quelle est l'action de l'École sur les destins individuels et sur l'évolution de la société ?",
      "Chapitre 8 : Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?",
      "Chapitre 9 : Quelles mutations du travail et de l'emploi ?",
      "Chapitre 10 : Comment expliquer l'engagement politique dans les sociétés démocratiques ?",
    ],
    "Regards croisés": [
      "Chapitre 11 : Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ?",
      "Chapitre 12 : Quelle action publique pour l'environnement ?",
    ],
  },
};

const ChapterCard = ({ chapter, level, subject }: { 
  chapter: string; 
  level: string;
  subject: string;
}) => {
  const navigate = useNavigate();
  
  // Extraire le numéro du chapitre depuis le titre (ex: "Chapitre 6 : ..." -> 6)
  const chapterNumberMatch = chapter.match(/Chapitre\s+(\d+)/);
  const chapterNumber = chapterNumberMatch ? chapterNumberMatch[1] : '1';
  const chapterId = `${level.toLowerCase()}-ch${chapterNumber}`;

  // Encode full accordion value for URL (level-subject format)
  const expandedSubject = `${level}-${subject}`;

  return (
    <Card 
      className="hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={() => navigate(`/chapitre/${chapterId}?from=programme&expandedLevel=${encodeURIComponent(level)}&expandedSubject=${encodeURIComponent(expandedSubject)}`)}
    >
      <CardContent className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2">{chapter}</h3>
        <div className="flex gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>Cours</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>Exercices</span>
          </div>
          <div className="flex items-center gap-1">
            <PenTool className="h-4 w-4" />
            <span>Évaluation</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const CourseNavigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get initial expanded states from URL
  const getInitialLevel = () => searchParams.get('expandedLevel') || '';
  const getInitialSubject = () => searchParams.get('expandedSubject') || '';

  const handleLevelChange = (value: string) => {
    if (value) {
      searchParams.set('expandedLevel', value);
      // Clear subject when level changes
      searchParams.delete('expandedSubject');
    } else {
      searchParams.delete('expandedLevel');
      searchParams.delete('expandedSubject');
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleSubjectChange = (value: string) => {
    if (value) {
      searchParams.set('expandedSubject', value);
    } else {
      searchParams.delete('expandedSubject');
    }
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Accordion 
        type="single" 
        collapsible 
        className="w-full"
        value={getInitialLevel()}
        onValueChange={handleLevelChange}
      >
        {Object.entries(courseStructure).map(([level, subjects]) => (
          <AccordionItem value={level} key={level}>
            <AccordionTrigger className="text-lg font-semibold hover:text-primary">
              {level}
            </AccordionTrigger>
            <AccordionContent>
              <Accordion 
                type="single" 
                collapsible 
                className="pl-4"
                value={getInitialSubject()}
                onValueChange={handleSubjectChange}
              >
                {Object.entries(subjects).map(([subject, chapters]) => (
                  <AccordionItem value={`${level}-${subject}`} key={subject}>
                    <AccordionTrigger className="text-md hover:text-primary">
                      {subject}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4">
                        {chapters.map((chapter) => (
                          <ChapterCard 
                            key={chapter} 
                            chapter={chapter} 
                            level={level}
                            subject={subject}
                          />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
