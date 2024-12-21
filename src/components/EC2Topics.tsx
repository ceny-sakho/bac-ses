import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface EC2TopicsProps {
  chapter: string;
  title: string;
}

export const EC2Topics: React.FC<EC2TopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();

  const getTopicsByChapter = () => {
    switch (chapter) {
      case '1':
        return [
          "Montrez le rôle des droits de propriété sur la croissance économique. (4 points)",
          "Montrez que l'accroissement de la productivité globale des facteurs est une source de croissance économique. (4 points)",
          "Montrez que l'innovation peut aider à repousser les limites écologiques de la croissance dans le secteur de l'énergie. (4 points)",
        ];
      case '2':
        return [
          "Montrez que le libre-échange est source de gains pour les pays participants. (4 points)",
          "Montrez que le protectionnisme peut avoir des effets positifs. (4 points)",
          "Montrez que la spécialisation internationale est source de gains à l'échange. (4 points)",
        ];
      case '3':
        return [
          "Montrez que le chômage structurel a des causes multiples. (4 points)",
          "Montrez que les politiques de l'emploi peuvent réduire le chômage structurel. (4 points)",
          "Montrez que la flexibilité du marché du travail peut réduire le chômage. (4 points)",
        ];
      // Ajoutez d'autres cas pour les autres chapitres
      default:
        return ["Aucun sujet disponible pour ce chapitre"];
    }
  };

  const topics = getTopicsByChapter();

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