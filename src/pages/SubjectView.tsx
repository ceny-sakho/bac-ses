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
  "seconde-ch1": "photo-1488590528505-98d2b5aba04b",
  "seconde-ch2": "photo-1460925895917-afdab827c52f",
  "seconde-ch3": "photo-1498050108023-c5249f4df085",
  "seconde-ch4": "photo-1529156069898-49953e39b3ac", // Image mise à jour : groupe de personnes interagissant
  "seconde-ch5": "photo-1517486808906-6ca8b3f04846",
  "seconde-ch6": "photo-1454165804606-c3d57bc86b40",
  "premiere-ch1": "photo-1605810230434-7631ac76ec81",
  "premiere-ch2": "photo-1518770660439-4636190af475",
  "premiere-ch3": "photo-1461749280684-dccba630e2f6",
  "premiere-ch4": "photo-1454165804606-c3d57bc86b40",
  "premiere-ch5": "photo-1486406146926-c627a92ad1ab",
  "premiere-ch6": "photo-1472396961693-142e6e269027",
  "premiere-ch7": "/lovable-uploads/a5f1310e-ceff-42ea-a90a-c09524fbb165.png",
  "premiere-ch8": "/lovable-uploads/148e9917-062b-42c9-b94f-36843bdcdfca.png",
  "premiere-ch9": "photo-1477281765962-ef34e8bb0967",
  "premiere-ch10": "/lovable-uploads/5e4af865-3a94-46b5-913f-de018a7959bc.png",
  "premiere-ch11": "photo-1454165804606-c3d57bc86b40",
  "premiere-ch12": "photo-1486406146926-c627a92ad1ab",
  "terminale-ch1": "photo-1526304640581-d334cdbbf45e",
  "terminale-ch2": "photo-1507679799987-c73779587ccf",
  "terminale-ch3": "photo-1611095973763-414019e72400",
  "terminale-ch4": "photo-1579532537598-459ecdaf39cc",
  "terminale-ch5": "photo-1551836022-deb4988cc6c0",
  "terminale-ch6": "photo-1502602898657-3e91760cbb34",
  "terminale-ch7": "photo-1523050854058-8df90110c9f1",
  "terminale-ch8": "photo-1491438590914-bc09fcaaf77a",
  "terminale-ch9": "photo-1664575602276-acd073f104c1",
  "terminale-ch10": "/lovable-uploads/5e4af865-3a94-46b5-913f-de018a7959bc.png",
  "terminale-ch11": "photo-1454165804606-c3d57bc86b40",
  "terminale-ch12": "photo-1486406146926-c627a92ad1ab"
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
