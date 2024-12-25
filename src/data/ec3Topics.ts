interface EC3Topic {
  question: string;
  year: string;
  location: string;
}

interface TopicsByChapter {
  [key: string]: EC3Topic[];
}

export const ec3Topics: TopicsByChapter = {
  "1": [
    { question: "Vous montrerez comment l'innovation peut être une solution aux limites écologiques de la croissance économique.", year: "2021", location: "France métropolitaine" },
    { question: "Vous montrerez comment les institutions influent sur la croissance économique.", year: "2021", location: "France métropolitaine" },
    { question: "Vous montrerez que le progrès technique peut engendrer des inégalités de revenus.", year: "2021", location: "Asie" },
    // ... autres questions du chapitre 1
  ],
  "2": [
    { question: "Vous montrerez que l'école favorise l'égalité des chances.", year: "2021", location: "Autres centres étrangers" },
    { question: "Vous montrerez comment la productivité des firmes détermine la compétitivité, et donc la capacité à exporter d'un pays.", year: "2021", location: "Autres centres étrangers" },
    // ... autres questions du chapitre 2
  ],
  // ... autres chapitres avec leurs questions respectives
};