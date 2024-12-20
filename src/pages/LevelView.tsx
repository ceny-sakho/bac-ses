import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

const subjects = [
  {
    title: "Science économique",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    description: "Comprendre les mécanismes économiques fondamentaux"
  },
  {
    title: "Sociologie / Science politique",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80",
    description: "Explorer les dynamiques sociales et politiques"
  },
  {
    title: "Regards croisés",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    description: "Analyser les interactions entre économie et société"
  }
];

const levelTitles = {
  "seconde": "Seconde",
  "premiere": "Première",
  "terminale": "Terminale"
};

const LevelView = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  
  const levelTitle = levelTitles[level as keyof typeof levelTitles] || "Niveau";

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
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <button onClick={() => navigate("/")} className="hover:text-gray-900">
              Accueil
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{levelTitle}</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900">
            Programme de {levelTitle}
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card 
              key={subject.title}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              onClick={() => {
                const subjectPath = subject.title === "Science économique" 
                  ? "science-eco"
                  : subject.title === "Sociologie / Science politique"
                    ? "socio"
                    : "regards";
                navigate(`/matiere/${subjectPath}`);
              }}
            >
              <div className="aspect-video relative">
                <img
                  src={subject.image}
                  alt={subject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>
                <p className="text-gray-600 mb-4">{subject.description}</p>
                <Button className="w-full bg-[#333333] hover:bg-[#444444] text-white">
                  Voir les chapitres
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LevelView;