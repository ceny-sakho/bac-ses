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

  const topics = [
    "Vous montrerez comment l'innovation peut être une solution aux limites écologiques de la croissance économique.",
    "Vous montrerez que le progrès technique peut engendrer des inégalités de revenus.",
    "Vous montrerez que le progrès technique est endogène.",
    "Vous montrerez que les institutions jouent un rôle dans la croissance économique.",
    "Vous montrerez que le progrès technique est endogène.",
    "Vous montrerez qu'il existe des limites écologiques à la croissance économique soutenable.",
    "Vous montrerez comment les institutions influent sur la croissance économique.",
    "Vous montrerez que la croissance économique soutenable se heurte à des limites écologiques.",
    "Vous montrerez que le progrès technique est endogène."
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