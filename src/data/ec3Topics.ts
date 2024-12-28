interface EC3Topic {
  question: string;
  year: string;
  location: string;
}

export const getTopicsByChapter = (chapter: string): EC3Topic[] => {
  switch (chapter) {
      case '1':
        return [
          {
            question: "Vous montrerez comment l'innovation peut être une solution aux limites écologiques de la croissance économique.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez comment les institutions influent sur la croissance économique.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que le progrès technique peut engendrer des inégalités de revenus.",
            year: "2021",
            location: "Asie"
          },
          {
            question: "Vous montrerez que la croissance économique soutenable se heurte à des limites écologiques.",
            year: "2022",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que le progrès technique est endogène.",
            year: "2022",
            location: "Amérique du Nord"
          },
          {
            question: "Vous montrerez que le progrès technique est endogène.",
            year: "2022",
            location: "Autres centres étrangers"
          },
          {
            question: "Vous montrerez que les institutions jouent un rôle dans la croissance économique.",
            year: "2022",
            location: "La Réunion"
          },
          {
            question: "Vous montrerez que les institutions jouent un rôle dans la croissance économique.",
            year: "2023",
            location: "Autres centres étrangers"
          },
          {
            question: "Vous montrerez que la croissance économique soutenable se heurte à des limites écologiques.",
            year: "2023",
            location: "Liban"
          }
        ];
      case '2':
        return [
          {
            question: "Vous montrerez que l'école favorise l'égalité des chances.",
            year: "2021",
            location: "Autres centres étrangers"
          },
          {
            question: "Vous montrerez comment la productivité des firmes détermine la compétitivité, et donc la capacité à exporter d'un pays.",
            year: "2021",
            location: "Autres centres étrangers"
          },
          {
            question: "Vous montrerez que la capacité à exporter d'un pays peut reposer sur ses firmes.",
            year: "2021",
            location: "Polynésie"
          },
          {
            question: "Vous montrerez que les dotations factorielles et technologiques peuvent expliquer les échanges internationaux.",
            year: "2021",
            location: "Polynésie"
          },
          {
            question: "Vous montrerez que le commerce international a des effets sur les inégalités.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que le commerce international a des effets sur les inégalités entre les pays et au sein de chaque pays.",
            year: "2020",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que la chaîne de valeur s'est internationalisée.",
            year: "2022",
            location: "Amérique du Sud"
          },
          {
            question: "Vous montrerez qu'il existe différentes explications à l'internationalisation de la chaîne de valeur.",
            year: "2022",
            location: "Polynésie"
          },
          {
            question: "Vous montrerez pourquoi il existe des échanges commerciaux entre pays comparables.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que la chaîne de valeur s'est internationalisée.",
            year: "2023",
            location: "La Réunion"
          },
          {
            question: "Vous montrerez que la spécialisation internationale des pays s'appuie sur plusieurs facteurs.",
            year: "2024",
            location: "Amérique du Nord"
          }
        ];
      case '3':
        return [
          {
            question: "Montrez que les fluctuations de l'activité économique ont des effets sur le chômage conjoncturel.",
            year: "2021",
            location: "Polynésie"
          },
          {
            question: "Vous montrerez que les politiques de soutien de la demande globale peuvent permettre de lutter contre le chômage.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que des politiques de flexibilisation du marché du travail permettent de lutter contre le chômage structurel.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que les institutions ont des effets positifs et négatifs sur le chômage structurel.",
            year: "2023",
            location: "Amérique du Nord"
          },
          {
            question: "Vous montrerez que le chômage structurel a plusieurs origines.",
            year: "2023",
            location: "Amérique du Nord"
          }
        ];
      case '4':
        return [
          {
            question: "Vous montrerez comment les différents instruments à disposition des pouvoirs publics peuvent permettre de faire face au changement climatique.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que la préservation de l'environnement implique une diversité d'acteurs à différentes échelles.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez qu'en présence de bien commun, les négociations et accords internationaux liés à la préservation de l'environnement sont soumis à des contraintes.",
            year: "2023",
            location: "Liban"
          },
          {
            question: "Vous montrerez que les questions environnementales impliquent une diversité d'acteurs à différentes échelles.",
            year: "2023",
            location: "Polynésie"
          },
          {
            question: "Vous montrerez que les pouvoirs publics disposent de plusieurs instruments pour faire face aux externalités négatives sur l'environnement.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que les pouvoirs publics disposent de plusieurs instruments pour préserver l'environnement.",
            year: "2024",
            location: "Amérique du Sud"
          }
        ];
      case '5':
        return [
          {
            question: "Vous montrerez que la mise en œuvre des politiques économiques conjoncturelles dans la zone euro rencontre des difficultés.",
            year: "2022",
            location: "Asie"
          }
        ];
      case '6':
        return [
          {
            question: "Vous montrerez que la structure socioprofessionnelle a évolué en France depuis la seconde moitié du XXe siècle.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez qu'une approche en termes de classes sociales reste pertinente pour rendre compte de la société française actuelle.",
            year: "2021",
            location: "Amérique du Nord"
          },
          {
            question: "Vous montrerez que l'approche en termes de classes sociales peut être remise en cause pour rendre compte de la société française actuelle.",
            year: "2021",
            location: "Autres centres étrangers"
          },
          {
            question: "Vous montrerez que la catégorie socioprofessionnelle et le revenu ne sont pas les seuls facteurs qui structurent l'espace social.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que l'approche en termes de classes sociales n'est pas toujours pertinente pour rendre compte de la société française d'aujourd'hui.",
            year: "2022",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que l'approche en termes de classes sociales, pour rendre compte de la société française, peut être remise en cause.",
            year: "2022",
            location: "Nouvelle-Calédonie"
          },
          {
            question: "Vous montrerez quels sont les processus qui remettent en cause une approche en termes de classes sociales pour rendre compte de la société française actuelle.",
            year: "2023",
            location: "Polynésie"
          },
          {
            question: "Vous montrerez que différents processus permettent de comprendre les principales évolutions de la structure socioprofessionnelle.",
            year: "2023",
            location: "Asie"
          },
          {
            question: "Vous montrerez que, depuis la seconde moitié du XXe siècle, la structure socioprofessionnelle française a connu des évolutions importantes.",
            year: "2024",
            location: "Polynésie"
          },
          {
            question: "Vous montrerez comment la structure socioprofessionnelle a évolué en France depuis la seconde moitié du XXème siècle.",
            year: "2024",
            location: "Autres centres étrangers"
          },
          {
            question: "Vous montrerez que les facteurs de structuration de l'espace social sont multiples.",
            year: "2024",
            location: "Autres centres étrangers"
          },
          {
            question: "Vous montrerez que l'évolution de la structure socioprofessionnelle contribue à expliquer la mobilité sociale.",
            year: "2024",
            location: "Amérique du Sud"
          }
        ];
      case '7':
        return [
          {
            question: "Vous montrerez que l'école favorise l'égalité des chances.",
            year: "2021",
            location: "Autres centres étrangers"
          },
          {
            question: "Vous montrerez que les inégalités de réussite scolaire s'expliquent par une multitude de facteurs.",
            year: "2022",
            location: "France métropolitaine"
          }
        ];
      case '8':
        return [
          {
            question: "Vous montrerez qu'une société plus mobile n'est pas nécessairement plus fluide.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que l'évolution de la structure socioprofessionnelle contribue à expliquer la mobilité sociale.",
            year: "2023",
            location: "Asie"
          },
          {
            question: "Vous montrerez que les ressources et les configurations familiales jouent un rôle dans la mobilité sociale.",
            year: "2021",
            location: "Polynésie"
          },
          {
            question: "Vous montrerez que l'évolution de la structure socioprofessionnelle contribue à expliquer la mobilité sociale.",
            year: "2024",
            location: "Amérique du Sud"
          }
        ];
      case '9':
        return [
          {
            question: "Vous montrerez que le numérique transforme le travail et l'emploi.",
            year: "2021",
            location: "Polynésie"
          },
          {
            question: "Vous montrerez que le numérique transforme l'emploi.",
            year: "2022",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que les évolutions des formes d'emploi rendent plus incertaines les frontières entre emploi, chômage et inactivité.",
            year: "2022",
            location: "Amérique du Nord"
          },
          {
            question: "Vous montrerez que certaines évolutions de l'emploi peuvent remettre en cause le pouvoir intégrateur du travail.",
            year: "2022",
            location: "Autres centres étrangers"
          },
          {
            question: "Vous montrerez que certaines évolutions de l'emploi ont pu affaiblir le rôle intégrateur du travail.",
            year: "2022",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que le numérique transforme l'emploi.",
            year: "2020",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que l'évolution des formes d'organisation du travail a des effets positifs et négatifs sur les conditions de travail.",
            year: "2024",
            location: "Asie"
          }
        ];
      case '10':
        return [
          {
            question: "Vous montrerez que les individus s'engagent malgré le paradoxe de l'action collective.",
            year: "2023",
            location: "La Réunion"
          },
          {
            question: "Vous montrerez que l'engagement politique dépend de variables sociodémographiques.",
            year: "2023",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que les acteurs de l'action collective sont divers.",
            year: "2022",
            location: "La Réunion"
          },
          {
            question: "Vous montrerez que l'action collective a connu de multiples transformations.",
            year: "2022",
            location: "Polynésie"
          },
          {
            question: "Vous montrerez que malgré le paradoxe de l'action collective, les individus s'engagent politiquement",
            year: "2021",
            location: "Polynésie"
          },
          {
            question: "Vous montrerez que l'engagement politique ne se limite pas à la pratique du vote.",
            year: "2021",
            location: "France métropolitaine"
          },
          {
            question: "Vous montrerez que l'engagement politique peut prendre des formes variées.",
            year: "2021",
            location: "Autres centres étrangers"
          },
          {
            question: "Vous montrerez que les objets de l'action collective se sont transformés.",
            year: "2021",
            location: "Amérique du Nord"
          },
          {
            question: "Vous montrerez que l'engagement politique dépend de variables sociodémographiques.",
            year: "2021",
            location: "Asie"
          },
          {
            question: "Vous montrerez que l'engagement politique dépend de différentes variables sociodémographiques.",
            year: "2024",
            location: "Amérique du Nord"
          }
        ];
      case '11':
        return [
          {
            question: "Vous montrerez que les inégalités présentent un caractère multiforme et cumulatif.",
            year: "2022",
            location: "Amérique du Sud"
          },
          {
            question: "Vous montrerez que la protection sociale contribue à la justice sociale.",
            year: "2022",
            location: "Asie"
          },
          {
            question: "Vous montrerez que les pouvoirs publics disposent de plusieurs instruments pour assurer la justice sociale.",
            year: "2024",
            location: "France métropolitaine"
          }
        ];
    case '12':
      return [
        {
          question: "Vous montrerez comment les différents instruments à disposition des pouvoirs publics peuvent permettre de faire face au changement climatique.",
          year: "2021",
          location: "France métropolitaine"
        },
        {
          question: "Vous montrerez que la préservation de l'environnement implique une diversité d'acteurs à différentes échelles.",
          year: "2021",
          location: "France métropolitaine"
        },
        {
          question: "Vous montrerez qu'en présence de bien commun, les négociations et accords internationaux liés à la préservation de l'environnement sont soumis à des contraintes.",
          year: "2023",
          location: "Liban"
        },
        {
          question: "Vous montrerez que les questions environnementales impliquent une diversité d'acteurs à différentes échelles.",
          year: "2023",
          location: "Polynésie"
        },
        {
          question: "Vous montrerez que les pouvoirs publics disposent de plusieurs instruments pour faire face aux externalités négatives sur l'environnement.",
          year: "2023",
          location: "France métropolitaine"
        },
        {
          question: "Vous montrerez que les pouvoirs publics disposent de plusieurs instruments pour préserver l'environnement.",
          year: "2024",
          location: "Amérique du Sud"
        }
      ];
    default:
      return [];
  }
};
