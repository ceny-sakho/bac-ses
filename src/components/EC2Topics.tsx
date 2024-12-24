import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

interface EC2Topic {
  question: string;
  year: string;
  location: string;
}

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
          {
            question: "Montrez le rôle des droits de propriété sur la croissance économique.",
            year: "2023",
            location: "France Métropolitaine"
          },
          {
            question: "Montrez que l'accroissement de la productivité globale des facteurs est une source de croissance économique.",
            year: "2022",
            location: "France Métropolitaine"
          },
          {
            question: "Montrez que l'innovation peut aider à repousser les limites écologiques de la croissance dans le secteur de l'énergie.",
            year: "2022",
            location: "Amérique du Nord"
          },
          {
            question: "Montrez que les contributions à la croissance ne se réduisent pas à la seule accumulation des facteurs de production.",
            year: "2022",
            location: "Asie"
          },
          {
            question: "Montrez comment l'innovation peut rendre la croissance économique soutenable.",
            year: "2021",
            location: "France Métropolitaine"
          },
          {
            question: "Montrez le caractère endogène du progrès technique.",
            year: "2021",
            location: "Autres centres étrangers"
          },
          {
            question: "Montrez que la Productivité Globale des Facteurs constitue une source essentielle de la croissance économique.",
            year: "2021",
            location: "Amérique du Nord"
          },
          {
            question: "Expliquez comment l'innovation peut aider à reculer les limites écologiques de la croissance économique.",
            year: "2021",
            location: "La Réunion"
          }
        ];
      case '2':
        return [
          {
            question: "Vous expliquerez les échanges de véhicules entre pays comparables.",
            year: "2023",
            location: "La Réunion"
          },
          {
            question: "Vous expliquerez le commerce entre pays comparables.",
            year: "2023",
            location: "Autres centres étrangers"
          },
          {
            question: "Montrez que le commerce international ne s'explique pas uniquement par les différences de dotations factorielles.",
            year: "2022",
            location: "France Métropolitaine"
          },
          {
            question: "Montrez que le commerce international ne s'explique pas uniquement par les différences de dotations factorielles entre pays.",
            year: "2022",
            location: "Amérique du Nord"
          }
        ];
      case '3':
        return [
          {
            question: "Montrez que le chômage structurel a des causes multiples.",
            year: "2023",
            location: "France Métropolitaine"
          },
          {
            question: "Montrez que les politiques de l'emploi peuvent réduire le chômage structurel.",
            year: "2022",
            location: "France Métropolitaine"
          },
          {
            question: "Montrez que la flexibilité du marché du travail peut réduire le chômage.",
            year: "2021",
            location: "France Métropolitaine"
          }
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question EC2</th>
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