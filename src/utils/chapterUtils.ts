import { chaptersData } from "@/data/chaptersData";

export const getChaptersForSubject = (subject: string | undefined) => {
  const chaptersPerSubject = {
    "science-eco": {
      seconde: [
        { id: "seconde-ch1", title: "Comment les économistes, les sociologues et les politistes raisonnent-ils et travaillent-ils ?" },
        { id: "seconde-ch2", title: "Comment crée-t-on des richesses et comment les mesure-t-on ?" },
        { id: "seconde-ch3", title: "Comment se forment les prix sur un marché ?" }
      ],
      premiere: [
        { id: "premiere-ch1", title: "Comment un marché concurrentiel fonctionne-t-il ?" },
        { id: "premiere-ch2", title: "Comment les marchés imparfaitement concurrentiels fonctionnent-ils ?" },
        { id: "premiere-ch3", title: "Quelles sont les principales défaillances de marché ?" },
        { id: "premiere-ch4", title: "Comment les agents économiques se financent-ils ?" },
        { id: "premiere-ch5", title: "Qu'est-ce que la monnaie et comment est-elle créée ?" }
      ],
      terminale: [
        { id: "terminale-ch1", title: "Quels sont les sources et les défis de la croissance économique ?" },
        { id: "terminale-ch2", title: "Quels sont les fondements du commerce international et de l'internationalisation de la production ?" },
        { id: "terminale-ch3", title: "Comment lutter contre le chômage ?" },
        { id: "terminale-ch4", title: "Comment expliquer les crises financières et réguler le système financier ?" },
        { id: "terminale-ch5", title: "Quelles politiques économiques dans le cadre européen ?" }
      ]
    },
    "socio": {
      seconde: [
        { id: "seconde-ch4", title: "Comment devenons-nous des acteurs sociaux ?" },
        { id: "seconde-ch5", title: "Comment s'organise la vie politique ?" }
      ],
      premiere: [
        { id: "premiere-ch6", title: "Comment la socialisation contribue-t-elle à expliquer les différences de comportement des individus ?" },
        { id: "premiere-ch7", title: "Comment se construisent et évoluent les liens sociaux ?" },
        { id: "premiere-ch8", title: "Quels sont les processus sociaux qui contribuent à la déviance ?" },
        { id: "premiere-ch9", title: "Comment se forme et s'exprime l'opinion publique ?" },
        { id: "premiere-ch10", title: "Voter : une affaire individuelle ou collective ?" }
      ],
      terminale: [
        { id: "terminale-ch6", title: "Comment est structurée la société française actuelle ?" },
        { id: "terminale-ch7", title: "Quelle est l'action de l'École sur les destins individuels et sur l'évolution de la société ?" },
        { id: "terminale-ch8", title: "Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?" },
        { id: "terminale-ch9", title: "Quelles mutations du travail et de l'emploi ?" },
        { id: "terminale-ch10", title: "Comment expliquer l'engagement politique dans les sociétés démocratiques ?" }
      ]
    },
    "regards": {
      seconde: [
        { id: "seconde-ch6", title: "Quelles relations entre diplôme, emploi et salaire ?" }
      ],
      premiere: [
        { id: "premiere-ch11", title: "Comment l'assurance et la protection sociale contribuent-elles à la gestion des risques dans les sociétés développées ?" },
        { id: "premiere-ch12", title: "Comment les entreprises sont-elles organisées et gouvernées ?" }
      ],
      terminale: [
        { id: "terminale-ch11", title: "Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ?" },
        { id: "terminale-ch12", title: "Quelle action publique pour l'environnement ?" }
      ]
    }
  };
  
  return chaptersPerSubject[subject as keyof typeof chaptersPerSubject] || {
    seconde: [],
    premiere: [],
    terminale: []
  };
};
