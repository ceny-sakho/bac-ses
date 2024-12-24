import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

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
      case '1': // Croissance économique
        return [
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
      case '2': // Commerce international
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
      case '3': // Chômage
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
      case '4': // Crises financières
        return [
          {
            question: "À l'aide d'un exemple historique, présentez un mécanisme à l'origine d'une crise financière.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Montrez que les crises financières peuvent avoir des effets sur l'activité économique.",
            year: "2023",
            location: "France métropolitaine"
          },
        ];
      case '5': // Politiques économiques européennes
        return [
          {
            question: "Montrez que la politique monétaire de la BCE peut avoir des effets sur l'activité économique.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Présentez deux limites de la politique budgétaire en zone euro.",
            year: "2023",
            location: "France métropolitaine"
          },
        ];
      case '6': // Structure sociale
        return [
          {
            question: "Montrez que la structure sociale peut être analysée en termes de classes sociales.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Montrez que la structure sociale ne peut pas être analysée uniquement en termes de classes sociales.",
            year: "2023",
            location: "France métropolitaine"
          },
        ];
      case '7': // L'École
        return [
          {
            question: "Montrez que l'école peut favoriser la mobilité sociale.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Présentez deux facteurs qui peuvent expliquer les inégalités de réussite scolaire.",
            year: "2023",
            location: "France métropolitaine"
          },
        ];
      case '8': // Mobilité sociale
        return [
          {
            question: "Montrez que la mobilité sociale peut s'expliquer par l'évolution de la structure socioprofessionnelle.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Présentez deux déterminants de la mobilité sociale.",
            year: "2023",
            location: "France métropolitaine"
          },
        ];
      case '9': // Mutations du travail
        return [
          {
            question: "Montrez que les transformations des formes d'emploi peuvent fragiliser le rôle intégrateur du travail.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Présentez deux évolutions de l'organisation du travail.",
            year: "2023",
            location: "France métropolitaine"
          },
        ];
      case '10': // Engagement politique
        return [
          {
            question: "Montrez que les variables sociodémographiques influencent l'engagement politique.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Présentez deux transformations de l'action collective dans les sociétés démocratiques.",
            year: "2023",
            location: "France métropolitaine"
          },
        ];
      case '11': // Justice sociale
        return [
          {
            question: "Montrez que certaines inégalités peuvent être considérées comme justes.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Présentez deux limites de l'action des pouvoirs publics en matière de justice sociale.",
            year: "2023",
            location: "France métropolitaine"
          },
        ];
      case '12': // L'Environnement
        return [
          {
            question: "Montrez que la préservation de l'environnement est devenue un problème public.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Présentez deux instruments dont disposent les pouvoirs publics pour préserver l'environnement.",
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