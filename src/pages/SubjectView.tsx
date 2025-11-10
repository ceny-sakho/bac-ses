import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { SearchFilter } from "@/components/subject/SearchFilter";
import { LevelFilter } from "@/components/subject/LevelFilter";
import { ChapterCard } from "@/components/subject/ChapterCard";

const subjectTitles = {
  "science-eco": "Science économique (SES)",
  "socio": "Sociologie / Science Politique (SES)",
  "regards": "Regards croisés (SES)"
} as const;

type SubjectTitle = keyof typeof subjectTitles;

const chapterImages = {
  "seconde-ch1": "/lovable-uploads/seconde-ch1.jpg",
  "seconde-ch2": "/lovable-uploads/seconde-ch2.jpg",
  "seconde-ch3": "/lovable-uploads/seconde-ch3.jpg",
  "seconde-ch4": "/lovable-uploads/seconde-ch4.jpg",
  "seconde-ch5": "/lovable-uploads/seconde-ch5.jpg",
  "seconde-ch6": "/lovable-uploads/seconde-ch6.jpg",
  "premiere-ch1": "/lovable-uploads/premiere-ch1.jpg",
  "premiere-ch2": "/lovable-uploads/premiere-ch2.jpg",
  "premiere-ch3": "/lovable-uploads/premiere-ch3.jpg",
  "premiere-ch4": "/lovable-uploads/premiere-ch4.jpg",
  "premiere-ch5": "/lovable-uploads/premiere-ch5.jpg",
  "premiere-ch6": "/lovable-uploads/premiere-ch6.jpg",
  "premiere-ch7": "/lovable-uploads/premiere-ch7.jpg",
  "premiere-ch8": "/lovable-uploads/premiere-ch8.jpg",
  "premiere-ch9": "/lovable-uploads/premiere-ch9.jpg",
  "premiere-ch10": "/lovable-uploads/5e4af865-3a94-46b5-913f-de018a7959bc.png",
  "premiere-ch11": "/lovable-uploads/terminale-ch11.jpg",
  "premiere-ch12": "/lovable-uploads/premiere-ch12.jpg",
  "terminale-ch1": "/lovable-uploads/terminale-ch1.jpg",
  "terminale-ch2": "/lovable-uploads/terminale-ch2.jpg",
  "terminale-ch3": "/lovable-uploads/terminale-ch3.jpg",
  "terminale-ch4": "/lovable-uploads/terminale-ch4.jpg",
  "terminale-ch5": "/lovable-uploads/terminale-ch5.jpg",
  "terminale-ch6": "/lovable-uploads/terminale-ch6.jpg",
  "terminale-ch7": "/lovable-uploads/terminale-ch7.jpg",
  "terminale-ch8": "/lovable-uploads/terminale-ch8.jpg",
  "terminale-ch9": "/lovable-uploads/terminale-ch9.jpg",
  "terminale-ch10": "/lovable-uploads/5e4af865-3a94-46b5-913f-de018a7959bc.png",
  "terminale-ch11": "/lovable-uploads/terminale-ch11.jpg",
  "terminale-ch12": "/lovable-uploads/terminale-ch12.jpg"
} as const;

interface Chapter {
  id: string;
  title: string;
}

interface ChaptersData {
  seconde: Chapter[];
  premiere: Chapter[];
  terminale: Chapter[];
}

interface ChaptersPerSubject {
  [key: string]: ChaptersData;
}

const SubjectView = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const getInitialLevel = () => {
    const pathParts = location.pathname.split('/');
    if (pathParts.includes('seconde')) return 'seconde';
    if (pathParts.includes('premiere')) return 'premiere';
    if (pathParts.includes('terminale')) return 'terminale';
    return 'all';
  };

  const [selectedLevel, setSelectedLevel] = React.useState(getInitialLevel());

  const getChaptersForSubject = (): ChaptersData => {
    const chaptersData: ChaptersPerSubject = {
      "science-eco": {
        seconde: [
          { id: "seconde-ch1", title: "Comment les économistes, les sociologues et les politistes raisonnent-ils et travaillent-ils ?" },
          { id: "seconde-ch2", title: "Comment crée-t-on des richesses et comment les mesure-t-on ?" },
          { id: "seconde-ch3", title: "Comment se forment les prix sur un marché ?" }
        ],
        premiere: [
          { id: "premiere-ch1", title: "Comment un marché concurrentiel fonctionne-t-il ?" },
          { id: "premiere-ch2", title: "Comment les marchés imparfaitement concurrentiels fonctionnent-ils ?" },
          { id: "premiere-ch3", title: "Quelles sont les principales défaillances de marché ?" },
          { id: "premiere-ch4", title: "Comment les agents économiques se financent-ils ?" },
          { id: "premiere-ch5", title: "Qu'est-ce que la monnaie et comment est-elle créée ?" }
        ],
        terminale: [
          { id: "terminale-ch1", title: "Quels sont les sources et les défis de la croissance économique ?" },
          { id: "terminale-ch2", title: "Quels sont les fondements du commerce international et de l'internationalisation de la production ?" },
          { id: "terminale-ch3", title: "Comment lutter contre le chômage ?" },
          { id: "terminale-ch4", title: "Comment expliquer les crises financières et réguler le système financier ?" },
          { id: "terminale-ch5", title: "Quelles politiques économiques dans le cadre européen ?" }
        ]
      },
      "socio": {
        seconde: [
          { id: "seconde-ch4", title: "Comment devenons-nous des acteurs sociaux ?" },
          { id: "seconde-ch5", title: "Comment s'organise la vie politique ?" }
        ],
        premiere: [
          { id: "premiere-ch6", title: "Comment la socialisation contribue-t-elle à expliquer les différences de comportement des individus ?" },
          { id: "premiere-ch7", title: "Comment se construisent et évoluent les liens sociaux ?" },
          { id: "premiere-ch8", title: "Quels sont les processus sociaux qui contribuent à la déviance ?" },
          { id: "premiere-ch9", title: "Comment se forme et s'exprime l'opinion publique ?" },
          { id: "premiere-ch10", title: "Voter : une affaire individuelle ou collective ?" }
        ],
        terminale: [
          { id: "terminale-ch6", title: "Comment est structurée la société française actuelle ?" },
          { id: "terminale-ch7", title: "Quelle est l'action de l'École sur les destins individuels et sur l'évolution de la société ?" },
          { id: "terminale-ch8", title: "Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?" },
          { id: "terminale-ch9", title: "Quelles mutations du travail et de l'emploi ?" },
          { id: "terminale-ch10", title: "Comment expliquer l'engagement politique dans les sociétés démocratiques ?" }
        ]
      },
      "regards": {
        seconde: [
          { id: "seconde-ch6", title: "Quelles relations entre diplôme, emploi et salaire ?" }
        ],
        premiere: [
          { id: "premiere-ch11", title: "Comment l'assurance et la protection sociale contribuent-elles à la gestion des risques dans les sociétés développées ?" },
          { id: "premiere-ch12", title: "Comment les entreprises sont-elles organisées et gouvernées ?" }
        ],
        terminale: [
          { id: "terminale-ch11", title: "Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ?" },
          { id: "terminale-ch12", title: "Quelle action publique pour l'environnement ?" }
        ]
      }
    };
    return chaptersData[subject as keyof typeof chaptersData] || {
      seconde: [],
      premiere: [],
      terminale: []
    };
  };

  const filteredChapters = React.useMemo(() => {
    const chapters = getChaptersForSubject();
    const allChapters = Object.entries(chapters).flatMap(([level, chaps]) => 
      chaps.map(chap => ({ ...chap, level }))
    );

    return allChapters.filter(chapter => {
      const matchesSearch = chapter.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel = selectedLevel === "all" || chapter.level === selectedLevel;
      return matchesSearch && matchesLevel;
    });
  }, [subject, searchTerm, selectedLevel]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            className="mb-4 hover:bg-[#403E43] hover:text-white transition-colors"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
          <div className="flex flex-col gap-4">
            <nav className="flex gap-2 text-sm text-gray-500">
              <button onClick={() => navigate("/")} className="hover:text-gray-900">Accueil</button>
              <ChevronRight className="h-4 w-4" />
              <span>Tous les articles</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900">{subjectTitles[subject as SubjectTitle]}</span>
            </nav>
            <h1 className="text-4xl font-bold">{subjectTitles[subject as SubjectTitle]}</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-8">
            <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <LevelFilter selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} />
          </div>

          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredChapters.map((chapter) => (
                <ChapterCard
                  key={chapter.id}
                  id={chapter.id}
                  title={chapter.title}
                  level={chapter.level}
                  image={chapterImages[chapter.id as keyof typeof chapterImages]}
                  onClick={() => navigate(`/chapitre/${chapter.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubjectView;
