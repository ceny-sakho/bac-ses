import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const chaptersData = {
  "seconde-ch1": {
    title: "Comment les économistes, les sociologues et les politistes raisonnent-ils et travaillent-ils ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau seconde",
    objectives: [
      "Comprendre qu'une des questions de base de l'économie est : « Qu'est-ce qu'une allocation efficace des ressources rares ? »",
      "Comprendre que celles de la sociologie sont « Comment fait-on société ? Comment explique-t-on les comportements sociaux ? »",
      "Comprendre que celle de la science politique est : « Comment se conquiert et s'exerce le pouvoir politique ? »",
      "Comprendre que ces disciplines réalisent des enquêtes et utilisent des données et des modèles (représentations simplifiées de la réalité)",
      "À partir d'exemples, comprendre la distinction entre la causalité et corrélation et savoir mettre en évidence un lien de causalité"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  }
  // ... Ajouter les autres chapitres de la même manière
};

const ChapterDetail = () => {
  const { chapterId } = useParams();
  const chapter = chaptersData[chapterId as keyof typeof chaptersData];

  if (!chapter) {
    return <div>Chapitre non trouvé</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-medium">{chapter.category}</span>
              <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                {chapter.level}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Chapitre - {chapter.title}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">
                Objectifs d'apprentissage
              </h2>
              <ul className="space-y-4">
                {chapter.objectives.map((objective, index) => (
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
                src={chapter.image}
                alt="Illustration du chapitre"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button size="lg" className="bg-[#B69B7D] hover:bg-[#9F876C]">
            DÉCOUVRIR LE COURS
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ChapterDetail;