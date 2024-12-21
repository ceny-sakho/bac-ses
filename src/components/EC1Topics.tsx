import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface EC1TopicsProps {
  chapter: string;
  title: string;
}

export const EC1Topics: React.FC<EC1TopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();

  const getTopicsByChapter = () => {
    switch (chapter) {
      case '1':
        return [
          "Montrez comment les droits de propriété influent sur la croissance économique.",
          "Expliquez en quoi l'innovation peut s'accompagner d'un processus de destruction créatrice.",
          "À l'aide d'un exemple, vous montrerez que le progrès technique est endogène.",
          "À partir d'un exemple, vous montrerez que l'innovation peut aider à reculer les limites écologiques de la croissance.",
          "À partir d'un exemple, vous montrerez que l'innovation peut aider à reculer les limites écologiques de la croissance.",
          "Montrez que le progrès technique peut engendrer des inégalités de revenus.",
          "Montrez que le progrès technique peut engendrer des inégalités de revenus.",
          "Comment les droits de propriété influent-ils sur la croissance économique ?",
          "Montrez que le progrès technique peut engendrer des inégalités de revenus.",
          "Montrez que l'innovation peut aider à reculer les limites écologiques auxquelles se heurte la croissance économique.",
          "Montrez que l'innovation peut aider à reculer les limites écologiques auxquelles se heurte la croissance économique.",
          "À partir d'un exemple, vous montrerez que l'innovation peut aider à reculer les limites écologiques de la croissance.",
          "À l'aide d'un exemple, vous montrerez que l'innovation s'accompagne d'un processus de destruction créatrice.",
          "Montrez que le progrès technique peut engendrer des inégalités de revenus.",
          "À l'aide d'un exemple, vous montrerez que la croissance économique se heurte à des limites écologiques.",
          "Présentez un mécanisme par lequel le progrès technique peut engendrer des inégalités de revenus.",
          "Vous montrerez comment les droits de propriété peuvent favoriser la croissance économique.",
          "À partir de l'exemple des droits de propriété, montrez comment les institutions influent sur la croissance économique.",
          "Comment les droits de propriété favorisent-ils la croissance économique ?"
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
        className="flex items-center gap-2 hover:bg-gris-sideral hover:text-white mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Button>

      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {topics.map((topic, index) => (
          <Card 
            key={index}
            className="cursor-pointer transition-colors duration-200 bg-white hover:bg-gris-sideral hover:text-white"
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