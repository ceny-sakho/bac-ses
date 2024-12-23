import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface EC3TopicsProps {
  chapter: string;
  title: string;
}

export const EC3Topics: React.FC<EC3TopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();

  const getTopicsByChapter = () => {
    switch (chapter) {
      case '1':
        return [
          "Vous montrerez comment l'innovation peut être une solution aux limites écologiques de la croissance économique.",
          "Vous montrerez que le progrès technique peut engendrer des inégalités de revenus.",
          "Vous montrerez que le progrès technique est endogène.",
          "Vous montrerez que les institutions jouent un rôle dans la croissance économique.",
          "Vous montrerez que le progrès technique est endogène.",
          "Vous montrerez qu'il existe des limites écologiques à la croissance économique soutenable.",
          "Vous montrerez comment les institutions influent sur la croissance économique.",
          "Vous montrerez que la croissance économique soutenable se heurte à des limites écologiques.",
          "Vous montrerez que le progrès technique est endogène.",
        ];
      case '2':
        return [
          "Vous montrerez que le libre-échange est source de gains mutuels.",
          "Vous montrerez que le protectionnisme peut avoir des effets positifs.",
          "Vous montrerez que la mondialisation peut remettre en cause la souveraineté des États.",
        ];
      case '3':
        return [
          "Vous montrerez que le chômage a des causes multiples.",
          "Vous montrerez que les politiques de l'emploi peuvent réduire le chômage.",
          "Vous montrerez que la flexibilité du marché du travail peut réduire le chômage.",
        ];
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
            className="cursor-pointer transition-colors duration-200 hover:bg-[#403E43] hover:text-white bg-white"
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