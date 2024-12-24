import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface EC1Topic {
  question: string;
  year: string;
  location: string;
}

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
          {
            question: "Vous montrerez, à travers deux arguments, que l'approche en termes de classes sociales reste pertinente pour rendre compte de la société française.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Montrez comment les droits de propriété influent sur la croissance économique.",
            year: "2023",
            location: "Amérique du Nord"
          },
          {
            question: "Vous montrerez que l'innovation peut aider à repousser les limites écologiques de la croissance dans le secteur de l'énergie.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Montrez que les contributions à la croissance ne se réduisent pas à la seule accumulation des facteurs de production.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Montrez comment l'innovation peut rendre la croissance économique soutenable.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Montrez le caractère endogène du progrès technique.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Montrez que la Productivité Globale des Facteurs constitue une source essentielle de la croissance économique.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Expliquez comment l'innovation peut aider à reculer les limites écologiques de la croissance économique.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Distinguez les sources de la croissance des pays observés.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Montrez que les sources de la croissance sont multiples.",
            year: "2023",
            location: "France métropolitaine"
          },
        ];
      case '2':
        return [
          {
            question: "Présentez deux inconvénients du libre-échange.",
            year: "2022",
            location: "Amérique du Nord"
          },
          {
            question: "Comment les avantages comparatifs peuvent-ils expliquer le commerce international ?",
            year: "2022",
            location: "La Réunion"
          },
          {
            question: "Vous montrerez que le libre-échange est source de gains mutuels.",
            year: "2022",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que le protectionnisme peut avoir des effets positifs.",
            year: "2022",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que la mondialisation peut remettre en cause la souveraineté des États.",
            year: "2022",
            location: "France métropolitaine"
          },
        ];
      case '3':
        return [
          {
            question: "Vous montrerez que le chômage structurel a des causes multiples.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que les politiques de l'emploi peuvent réduire le chômage structurel.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que la flexibilité du marché du travail peut réduire le chômage.",
            year: "2023",
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question EC1</th>
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
