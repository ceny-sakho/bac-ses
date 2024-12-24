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

  const getTopicsByChapter = (): EC1Topic[] => {
    switch (chapter) {
      case '1': // Croissance économique
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
            question: "Expliquez en quoi l'innovation peut s'accompagner d'un processus de destruction créatrice.",
            year: "2023",
            location: "Asie"
          },
          {
            question: "À l'aide d'un exemple, vous montrerez que le progrès technique est endogène.",
            year: "2023",
            location: "Polynésie"
          },
          {
            question: "À partir d'un exemple, vous montrerez que l'innovation peut aider à reculer les limites écologiques de la croissance.",
            year: "2022",
            location: "Amérique du Sud"
          },
          {
            question: "À l'aide d'un argument, montrez que l'approche en termes de classes sociales pour rendre compte de la société française d'aujourd'hui peut être remise en cause.",
            year: "2022",
            location: "Amérique du Sud"
          },
          {
            question: "À partir d'un exemple, vous montrerez que l'innovation peut aider à reculer les limites écologiques de la croissance.",
            year: "2022",
            location: "Polynésie"
          },
          {
            question: "Comment les droits de propriété influent-ils sur la croissance économique ?",
            year: "2022",
            location: "France métropolitaine"
          },
          {
            question: "À l'aide d'un argument, montrez que l'approche en termes de classes sociales pour rendre compte de la société française d'aujourd'hui peut être remise en cause.",
            year: "2022",
            location: "Amérique du Nord"
          },
          {
            question: "Montrez que le progrès technique peut engendrer des inégalités de revenus.",
            year: "2022",
            location: "Amérique du Nord"
          },
          {
            question: "Montrez que l'innovation peut aider à reculer les limites écologiques auxquelles se heurte la croissance économique.",
            year: "2022",
            location: "Asie"
          },
          {
            question: "Montrez que l'innovation peut aider à reculer les limites écologiques auxquelles se heurte la croissance économique.",
            year: "2022",
            location: "Autres centres étrangers"
          },
          {
            question: "À partir d'un exemple, vous montrerez que l'innovation peut aider à reculer les limites écologiques de la croissance.",
            year: "2022",
            location: "France métropolitaine"
          },
          {
            question: "À l'aide d'un exemple, vous montrerez que l'innovation s'accompagne d'un processus de destruction créatrice.",
            year: "2021",
            location: "Polynésie"
          },
          {
            question: "À l'aide d'un exemple, vous montrerez que la croissance économique se heurte à des limites écologiques.",
            year: "2021",
            location: "Polynésie"
          },
          {
            question: "Présentez un mécanisme par lequel le progrès technique peut engendrer des inégalités de revenus.",
            year: "2021",
            location: "Polynésie"
          },
          {
            question: "Montrez que le progrès technique peut engendrer des inégalités de revenus.",
            year: "2022",
            location: "Nouvelle-Calédonie"
          },
          {
            question: "Vous montrerez comment les droits de propriété peuvent favoriser la croissance économique.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "À partir de l'exemple des droits de propriété, montrez comment les institutions influent sur la croissance économique.",
            year: "2021",
            location: "Amérique du Nord"
          },
          {
            question: "Comment les droits de propriété favorisent-ils la croissance économique ?",
            year: "2020",
            location: "France métropolitaine"
          },
          {
            question: "Quels sont les effets du marché unique sur la croissance économique dans l'Union européenne ?",
            year: "2024",
            location: "Amérique du Nord"
          }
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
            question: "Présentez deux raisons expliquant le commerce international entre pays comparables.",
            year: "2022",
            location: "La Réunion"
          },
          {
            question: "À partir d’un exemple, illustrez l’internationalisation de la chaîne de valeur.",
            year: "2022",
            location: "Autres centres étrangers"
          },
          {
            question: "Vous montrerez comment les dotations factorielles peuvent expliquer la spécialisation internationale.",
            year: "2022",
            location: "France métropolitaine"
          },
          {
            question: "À l’aide d’un exemple, vous montrerez comment les avantages comparatifs expliquent la spécialisation internationale.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "À l’aide d’un exemple, vous montrerez comment la différenciation des produits peut expliquer le commerce entre pays comparables.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Comment les dotations factorielles peuvent-elles expliquer la spécialisation internationale ?",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que les effets du commerce international sur les inégalités sont contrastés.",
            year: "2023",
            location: "La Réunion"
          },
          {
            question: "Montrez que la différenciation des produits peut expliquer le commerce entre pays comparables.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "À l’aide d’un exemple, montrez que la chaîne de valeur s’internationalise.",
            year: "2023",
            location: "Autres centres étrangers"
          },
          {
            question: "Comment peut-on expliquer l’internationalisation de la chaîne de valeur ?",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Les effets induits du commerce international sont-ils toujours positifs ?",
            year: "2022",
            location: "Autres centres étrangers"
          },
          {
            question: "Les effets du commerce international sont-ils toujours positifs ?",
            year: "2021",
            location: "Polynésie"
          },
          {
            question: "Vous présenterez le rôle des avantages comparatifs dans la spécialisation internationale.",
            year: "2023",
            location: "Amérique du Nord"
          }
        ];
      // ... keep existing code (remaining chapters)
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
      
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Question EC1
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Année
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lieu
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {topics.map((topic, index) => (
              <tr 
                key={index}
                className="hover:bg-gris-sideral hover:text-white cursor-pointer transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-normal">{topic.question}</td>
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
