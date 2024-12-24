import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface EC3Topic {
  question: string;
  year: string;
  location: string;
}

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
          {
            question: "Vous montrerez comment l'innovation peut être une solution aux limites écologiques de la croissance économique.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que le progrès technique peut engendrer des inégalités de revenus.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que le progrès technique est endogène.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que les institutions jouent un rôle dans la croissance économique.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez qu'il existe des limites écologiques à la croissance économique soutenable.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez comment les institutions influent sur la croissance économique.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que la croissance économique soutenable se heurte à des limites écologiques.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que le progrès technique est endogène.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que le progrès technique est endogène.",
            year: "2021",
            location: "France métropolitaine"
          },
        ];
      case '2':
        return [
          {
            question: "Vous montrerez que le libre-échange est source de gains mutuels.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que le protectionnisme peut avoir des effets positifs.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que la mondialisation peut remettre en cause la souveraineté des États.",
            year: "2021",
            location: "France métropolitaine"
          },
        ];
      case '3':
        return [
          {
            question: "Vous montrerez que le chômage a des causes multiples.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que les politiques de l'emploi peuvent réduire le chômage.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que la flexibilité du marché du travail peut réduire le chômage.",
            year: "2021",
            location: "France métropolitaine"
          },
        ];
      default:
        return [];
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
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question EC3</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lieu</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {topics.map((topic, index) => (
              <tr 
                key={index}
                className="hover:bg-gris-sideral hover:text-white cursor-pointer transition-colors duration-200"
              >
                <td className="px-6 py-4">{topic.question}</td>
                <td className="px-6 py-4">{topic.year}</td>
                <td className="px-6 py-4">{topic.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
