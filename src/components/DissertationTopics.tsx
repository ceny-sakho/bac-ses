import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface DissertationTopicsProps {
  chapter: string;
  title: string;
}

export const DissertationTopics: React.FC<DissertationTopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "Les facteurs travail et capital sont-ils suffisants pour expliquer la croissance ?",
      driveLink: "https://drive.google.com/file/d/1Ek5Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2/view"
    },
    {
      title: "Quel est le rôle du progrès technique dans le processus de croissance économique ?",
      driveLink: "https://drive.google.com/file/d/1Ek6Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2/view?usp=sharing"
    },
    {
      title: "Comment le progrès technique favorise-t-il la croissance économique ?",
      driveLink: "https://drive.google.com/file/d/1Ek7Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2/view?usp=sharing"
    },
    {
      title: "L'accroissement de la productivité globale des facteurs suffit-il à expliquer la croissance économique ?",
      driveLink: "https://drive.google.com/file/d/1Ek8Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2/view?usp=sharing"
    },
    {
      title: "Comment l'innovation peut-elle contribuer à reculer les limites écologiques d'une croissance soutenable ?",
      driveLink: "https://drive.google.com/file/d/1Ek9Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2/view?usp=sharing"
    },
    {
      title: "Quel est le rôle de l'innovation sur la croissance économique ?",
      driveLink: "https://drive.google.com/file/d/1Ek0Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2/view?usp=sharing"
    },
    {
      title: "L'accumulation des facteurs de production est-elle la seule source de croissance économique ?",
      driveLink: "https://drive.google.com/file/d/1Ek1Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2/view?usp=sharing"
    },
    {
      title: "Les limites écologiques sont-elles le seul défi posé par la croissance économique ?",
      driveLink: "https://drive.google.com/file/d/1Ek2Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2/view?usp=sharing"
    },
    {
      title: "L'accumulation des facteurs de production permet-elle, à elle seule, d'expliquer la croissance économique ?",
      driveLink: "https://drive.google.com/file/d/1Ek3Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2/view?usp=sharing"
    },
    {
      title: "Quelles sont les sources de la croissance économique ?",
      driveLink: "https://drive.google.com/file/d/1Ek4Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2Hs2/view?usp=sharing"
    }
  ];

  const handleTopicClick = (driveLink: string) => {
    const encodedUrl = encodeURIComponent(driveLink);
    navigate(`/pdf-viewer/${encodedUrl}`);
  };

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
            onClick={() => handleTopicClick(topic.driveLink)}
          >
            <CardContent className="p-6 flex items-center justify-between">
              <p className="text-lg">{topic.title}</p>
              <FileText className="h-5 w-5" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
