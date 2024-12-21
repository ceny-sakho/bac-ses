import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface DissertationTopicsProps {
  chapter: string;
  title: string;
}

export const DissertationTopics: React.FC<DissertationTopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();

  const topics = [
    "Les facteurs travail et capital sont-ils suffisants pour expliquer la croissance ?",
    "Quel est le rôle du progrès technique dans le processus de croissance économique ?",
    "Comment le progrès technique favorise-t-il la croissance économique ?",
    "L'accroissement de la productivité globale des facteurs suffit-il à expliquer la croissance économique ?",
    "Comment l'innovation peut-elle contribuer à reculer les limites écologiques d'une croissance soutenable ?",
    "Quel est le rôle de l'innovation sur la croissance économique ?",
    "L'accumulation des facteurs de production est-elle la seule source de croissance économique ?",
    "Les limites écologiques sont-elles le seul défi posé par la croissance économique ?",
    "L'accumulation des facteurs de production permet-elle, à elle seule, d'expliquer la croissance économique ?",
    "Quelles sont les sources de la croissance économique ?"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Button>

      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {topics.map((topic, index) => (
          <Card 
            key={index}
            className="cursor-pointer transition-colors duration-200 hover:bg-[#403E43] hover:text-white"
          >
            <CardContent className="p-6">
              <p className="text-lg">{topic}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};