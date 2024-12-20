export type ChapterData = {
  title: string;
  category: string;
  level: string;
  objectives: string[];
  image: string;
};

export const chaptersData: Record<string, ChapterData> = {
  // Seconde
  "seconde-ch1": {
    title: "Comment les économistes, les sociologues et les politistes raisonnent-ils et travaillent-ils ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau seconde",
    objectives: [
      "Comprendre qu'une des questions de base de l'économie est : « Qu'est-ce qu'une allocation efficace des ressources rares ? »",
      "Comprendre que celles de la sociologie sont « Comment fait-on société ? Comment explique-t-on les comportements sociaux ? »",
      "Comprendre que celle de la science politique est : « Comment se conquiert et s'exerce le pouvoir politique ? »",
      "Comprendre que ces disciplines réalisent des enquêtes et utilisent des données et des modèles (représentations simplifiées de la réalité)",
      "À partir d'exemples, comprendre la distinction entre la causalité et corrélation et savoir mettre en évidence un lien de causalité"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  },
  "seconde-ch2": {
    title: "Comment crée-t-on des richesses et comment les mesure-t-on ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau seconde",
    objectives: [
      "Savoir illustrer la diversité des producteurs (entreprises, administrations, économie sociale et solidaire) et connaître la distinction entre production marchande et non marchande",
      "Savoir que la production résulte de la combinaison de travail, de capital, de technologie et de ressources naturelles",
      "Connaître les principaux indicateurs de création de richesses de l'entreprise (valeur ajoutée, chiffre d'affaires, bénéfice)"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
  "seconde-ch3": {
    title: "Comment se forment les prix sur un marché ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau seconde",
    objectives: [
      "Savoir que le marché est un lieu d'échange de biens et services",
      "Comprendre que le prix et la quantité d'équilibre sont déterminés par la confrontation de l'offre et de la demande",
      "Être capable d'illustrer le fonctionnement du marché par des exemples"
    ],
    image: "https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&q=80"
  },
  "seconde-ch4": {
    title: "Comment devenons-nous des acteurs sociaux ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau seconde",
    objectives: [
      "Comprendre comment les individus deviennent des acteurs sociaux",
      "Savoir que la socialisation est un processus",
      "Comprendre le rôle des différentes instances de socialisation"
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
  },
  "seconde-ch5": {
    title: "Comment s'organise la vie politique ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau seconde",
    objectives: [
      "Comprendre comment s'organise la vie politique",
      "Connaître les principales institutions politiques",
      "Comprendre le rôle des partis politiques"
    ],
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80"
  },
  "seconde-ch6": {
    title: "Quelles relations entre diplôme, emploi et salaire ?",
    category: "REGARDS CROISÉS",
    level: "niveau seconde",
    objectives: [
      "Comprendre les relations entre le diplôme, l'emploi et le salaire",
      "Savoir que le diplôme est un déterminant de l'emploi et du salaire",
      "Comprendre que la relation entre diplôme et emploi est complexe"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  },
  // Première
  "premiere-ch1": {
    title: "Comment un marché concurrentiel fonctionne-t-il ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau première",
    objectives: [
      "Savoir que le marché est une institution et savoir distinguer les marchés selon leur degré de concurrence",
      "Savoir que le marché suppose notamment l'existence d'institutions et de conventions",
      "Savoir identifier les défaillances du marché"
    ],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
  },
  "premiere-ch2": {
    title: "Comment les marchés imparfaitement concurrentiels fonctionnent-ils ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau première",
    objectives: [
      "Comprendre les caractéristiques des marchés imparfaitement concurrentiels",
      "Savoir identifier les différents types de marchés",
      "Analyser les conséquences des imperfections de marché"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
  },
  "premiere-ch3": {
    title: "Quelles sont les principales défaillances de marché ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau première",
    objectives: [
      "Comprendre les causes des défaillances de marché",
      "Savoir identifier les conséquences des défaillances de marché",
      "Analyser les solutions possibles pour remédier aux défaillances"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
  },
  "premiere-ch4": {
    title: "Comment les agents économiques se financent-ils ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau première",
    objectives: [
      "Comprendre les différentes sources de financement des agents économiques",
      "Savoir identifier les acteurs du financement",
      "Analyser les enjeux du financement pour l'économie"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  },
  "premiere-ch5": {
    title: "Qu'est-ce que la monnaie et comment est-elle créée ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau première",
    objectives: [
      "Comprendre le rôle de la monnaie dans l'économie",
      "Savoir expliquer le processus de création monétaire",
      "Analyser les enjeux de la politique monétaire"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
  },
  "premiere-ch6": {
    title: "Comment la socialisation contribue-t-elle à expliquer les différences de comportement des individus ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau première",
    objectives: [
      "Comprendre le processus de socialisation",
      "Savoir identifier les agents de socialisation",
      "Analyser les effets de la socialisation sur le comportement"
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
  },
  "premiere-ch7": {
    title: "Comment se construisent et évoluent les liens sociaux ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau première",
    objectives: [
      "Comprendre la notion de lien social",
      "Savoir identifier les différents types de liens sociaux",
      "Analyser les facteurs qui influencent l'évolution des liens sociaux"
    ],
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
  },
  "premiere-ch8": {
    title: "Quels sont les processus sociaux qui contribuent à la déviance ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau première",
    objectives: [
      "Comprendre la notion de déviance",
      "Savoir identifier les facteurs de déviance",
      "Analyser les conséquences de la déviance sur la société"
    ],
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80"
  },
  "premiere-ch9": {
    title: "Comment se forme et s'exprime l'opinion publique ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau première",
    objectives: [
      "Comprendre la notion d'opinion publique",
      "Savoir identifier les facteurs qui influencent l'opinion publique",
      "Analyser les enjeux de l'opinion publique dans la démocratie"
    ],
    image: "https://images.unsplash.com/photo-1494172892981-ce47ca32a82a?auto=format&fit=crop&q=80"
  },
  "premiere-ch10": {
    title: "Voter : une affaire individuelle ou collective ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau première",
    objectives: [
      "Comprendre les enjeux du vote",
      "Savoir identifier les facteurs qui influencent le vote",
      "Analyser les conséquences du vote sur la démocratie"
    ],
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80"
  },
  "premiere-ch11": {
    title: "Comment l'assurance et la protection sociale contribuent-elles à la gestion des risques dans les sociétés développées ?",
    category: "REGARDS CROISÉS",
    level: "niveau première",
    objectives: [
      "Comprendre le rôle de l'assurance dans la gestion des risques",
      "Savoir identifier les différents types de protection sociale",
      "Analyser les enjeux de la protection sociale dans les sociétés développées"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  },
  "premiere-ch12": {
    title: "Comment les entreprises sont-elles organisées et gouvernées ?",
    category: "REGARDS CROISÉS",
    level: "niveau première",
    objectives: [
      "Comprendre les différentes formes d'organisation des entreprises",
      "Savoir identifier les enjeux de la gouvernance d'entreprise",
      "Analyser les conséquences de l'organisation sur la performance des entreprises"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
  },
  // Terminale
  "terminale-ch1": {
    title: "Quels sont les sources et les défis de la croissance économique ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau terminale",
    objectives: [
      "Comprendre le processus de croissance économique et les sources de la croissance",
      "Comprendre que le progrès technique est endogène et qu'il résulte en particulier de l'innovation",
      "Comprendre comment les institutions influent sur la croissance en affectant l'incitation à investir et innover",
      "Savoir mesurer et comprendre les sources de la croissance"
    ],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80"
  },
  "terminale-ch2": {
    title: "Quels sont les fondements du commerce international et de l'internationalisation de la production ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau terminale",
    objectives: [
      "Comprendre les théories du commerce international",
      "Savoir identifier les enjeux de l'internationalisation de la production",
      "Analyser les conséquences du commerce international sur les économies"
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
  },
  "terminale-ch3": {
    title: "Comment lutter contre le chômage ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau terminale",
    objectives: [
      "Comprendre les causes du chômage",
      "Savoir identifier les politiques de lutte contre le chômage",
      "Analyser les enjeux du chômage pour l'économie"
    ],
    image: "https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&q=80"
  },
  "terminale-ch4": {
    title: "Comment expliquer les crises financières et réguler le système financier ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau terminale",
    objectives: [
      "Comprendre les causes des crises financières",
      "Savoir identifier les mécanismes de régulation du système financier",
      "Analyser les enjeux de la régulation pour la stabilité économique"
    ],
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80"
  },
  "terminale-ch5": {
    title: "Quelles politiques économiques dans le cadre européen ?",
    category: "SCIENCE ÉCONOMIQUE",
    level: "niveau terminale",
    objectives: [
      "Comprendre les enjeux des politiques économiques en Europe",
      "Savoir identifier les instruments de politique économique",
      "Analyser les conséquences des politiques économiques sur les États membres"
    ],
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80"
  },
  "terminale-ch6": {
    title: "Comment est structurée la société française actuelle ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau terminale",
    objectives: [
      "Comprendre les structures sociales en France",
      "Savoir identifier les inégalités sociales",
      "Analyser les enjeux de la structure sociale pour la cohésion"
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
  },
  "terminale-ch7": {
    title: "Quelle est l'action de l'École sur les destins individuels et sur l'évolution de la société ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau terminale",
    objectives: [
      "Comprendre le rôle de l'École dans la socialisation",
      "Savoir identifier les inégalités d'accès à l'éducation",
      "Analyser les conséquences de l'éducation sur les trajectoires individuelles"
    ],
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
  },
  "terminale-ch8": {
    title: "Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau terminale",
    objectives: [
      "Comprendre les mécanismes de la mobilité sociale",
      "Savoir identifier les facteurs qui influencent la mobilité",
      "Analyser les enjeux de la mobilité sociale pour la société"
    ],
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80"
  },
  "terminale-ch9": {
    title: "Quelles mutations du travail et de l'emploi ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau terminale",
    objectives: [
      "Comprendre les évolutions du marché du travail",
      "Savoir identifier les nouvelles formes d'emploi",
      "Analyser les enjeux des mutations du travail pour les individus"
    ],
    image: "https://images.unsplash.com/photo-1494172892981-ce47ca32a82a?auto=format&fit=crop&q=80"
  },
  "terminale-ch10": {
    title: "Comment expliquer l'engagement politique dans les sociétés démocratiques ?",
    category: "SOCIOLOGIE ET SCIENCE POLITIQUE",
    level: "niveau terminale",
    objectives: [
      "Comprendre les facteurs de l'engagement politique",
      "Savoir identifier les différentes formes d'engagement",
      "Analyser les enjeux de l'engagement pour la démocratie"
    ],
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80"
  },
  "terminale-ch11": {
    title: "Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ?",
    category: "REGARDS CROISÉS",
    level: "niveau terminale",
    objectives: [
      "Comprendre les différentes conceptions de la justice sociale",
      "Savoir identifier les inégalités sociales",
      "Analyser les enjeux de la justice sociale pour la cohésion"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  },
  "terminale-ch12": {
    title: "Quelle action publique pour l'environnement ?",
    category: "REGARDS CROISÉS",
    level: "niveau terminale",
    objectives: [
      "Comprendre les enjeux environnementaux contemporains",
      "Savoir identifier les politiques publiques en matière d'environnement",
      "Analyser les conséquences des actions publiques sur l'environnement"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
  }
};
