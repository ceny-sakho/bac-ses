import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { subjectTitles, chapterImages } from "@/data/constants";
import { getChaptersForSubject } from "@/utils/chapterUtils";

const SubjectView = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = React.useState("");
  
  // Déterminer le niveau initial en fonction de l'URL
  const getInitialLevel = () => {
    const pathParts = location.pathname.split('/');
    if (pathParts.includes('seconde')) return 'seconde';
    if (pathParts.includes('premiere')) return 'premiere';
    if (pathParts.includes('terminale')) return 'terminale';
    return pathParts[pathParts.length - 1].includes('seconde') ? 'seconde' :
           pathParts[pathParts.length - 1].includes('premiere') ? 'premiere' :
           pathParts[pathParts.length - 1].includes('terminale') ? 'terminale' : 'all';
  };

  const [selectedLevel, setSelectedLevel] = React.useState(getInitialLevel());

  const filteredChapters = React.useMemo(() => {
    const chapters = getChaptersForSubject(subject);
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
            className="mb-4"
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
              <span className="text-gray-900">{subjectTitles[subject as keyof typeof subjectTitles]}</span>
            </nav>
            <h1 className="text-4xl font-bold">{subjectTitles[subject as keyof typeof subjectTitles]}</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Recherche</h2>
              <Input 
                type="search" 
                placeholder="Votre recherche.." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Niveaux</h2>
              <RadioGroup value={selectedLevel} onValueChange={setSelectedLevel}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">Toutes les étiquettes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="seconde" id="seconde" />
                    <Label htmlFor="seconde">niveau seconde</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="premiere" id="premiere" />
                    <Label htmlFor="premiere">niveau première</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="terminale" id="terminale" />
                    <Label htmlFor="terminale">niveau terminale</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredChapters.map((chapter) => (
                <Card 
                  key={chapter.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                  onClick={() => navigate(`/chapitre/${chapter.id}`)}
                >
                  <div className="aspect-video relative">
                    <img
                      src={`https://images.unsplash.com/${chapterImages[chapter.id as keyof typeof chapterImages]}`}
                      alt={chapter.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-2">{chapter.title}</h3>
                    <p className="text-sm text-gray-500">Niveau {chapter.level}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubjectView;