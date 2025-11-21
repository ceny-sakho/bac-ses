export interface Devoir {
  id: string;
  title: string;
  pdfPath: string;
}

export interface DevoirsChapter {
  [chapterId: string]: Devoir[];
}

export const devoirsData: DevoirsChapter = {
  // Terminale - Chapitre 1
  'terminale-1': [
    {
      id: 'devoir1',
      title: 'Devoir 1',
      pdfPath: 'https://cdn.jsdelivr.net/gh/ceny-sakho/bac-ses@main/public/terminale/economie/chapitre1/devoir1.pdf'
    },
    {
      id: 'devoir2',
      title: 'Devoir 2',
      pdfPath: 'https://cdn.jsdelivr.net/gh/ceny-sakho/bac-ses@main/public/terminale/economie/chapitre1/devoir2.pdf'
    },
    {
      id: 'devoir3',
      title: 'Devoir 3',
      pdfPath: 'https://cdn.jsdelivr.net/gh/ceny-sakho/bac-ses@main/public/terminale/economie/chapitre1/devoir3.pdf'
    }
  ],
  
  // Terminale - Chapitre 2
  'terminale-2': [],
  
  // Terminale - Chapitre 3
  'terminale-3': [],
  
  // Terminale - Chapitre 4
  'terminale-4': [],
  
  // Terminale - Chapitre 5
  'terminale-5': [],
  
  // Terminale - Chapitre 6
  'terminale-6': [],
  
  // Terminale - Chapitre 7
  'terminale-7': [],
  
  // Terminale - Chapitre 8
  'terminale-8': [],
  
  // Terminale - Chapitre 9
  'terminale-9': [],
  
  // Terminale - Chapitre 10
  'terminale-10': [],
  
  // Terminale - Chapitre 11
  'terminale-11': [],
  
  // Terminale - Chapitre 12
  'terminale-12': [],
  
  // Première - Chapitre 1
  'premiere-1': [],
  
  // Première - Chapitre 2
  'premiere-2': [],
  
  // Première - Chapitre 3
  'premiere-3': [],
  
  // Première - Chapitre 4
  'premiere-4': [],
  
  // Première - Chapitre 5
  'premiere-5': [],
  
  // Première - Chapitre 6
  'premiere-6': [],
  
  // Première - Chapitre 7
  'premiere-7': [],
  
  // Première - Chapitre 8
  'premiere-8': [],
  
  // Première - Chapitre 9
  'premiere-9': [],
  
  // Première - Chapitre 10
  'premiere-10': [],
  
  // Première - Chapitre 11
  'premiere-11': [],
  
  // Seconde - Chapitre 1
  'seconde-1': [],
  
  // Seconde - Chapitre 2
  'seconde-2': [],
  
  // Seconde - Chapitre 3
  'seconde-3': [],
  
  // Seconde - Chapitre 4
  'seconde-4': [],
  
  // Seconde - Chapitre 5
  'seconde-5': [],
  
  // Seconde - Chapitre 6
  'seconde-6': [],
};
