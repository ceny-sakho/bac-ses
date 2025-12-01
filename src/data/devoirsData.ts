export interface Devoir {
  id: string;
  title: string;
  pdfPath: string;
}

export interface DevoirsChapter {
  [chapterId: string]: Devoir[];
}

export const devoirsData: DevoirsChapter = {
  // Terminale - Science Économique
  'terminale-1': [
    {
      id: 'devoir1',
      title: 'Devoir 1',
      pdfPath: '/terminale/economie/chapitre1/devoirs/devoir1.pdf'
    },
    {
      id: 'devoir2',
      title: 'Devoir 2',
      pdfPath: '/terminale/economie/chapitre1/devoirs/devoir2.pdf'
    },
    {
      id: 'devoir3',
      title: 'Devoir 3',
      pdfPath: '/terminale/economie/chapitre1/devoirs/devoir3.pdf'
    }
  ],
  'terminale-2': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/terminale/economie/chapitre2/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/terminale/economie/chapitre2/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/terminale/economie/chapitre2/devoirs/devoir3.pdf' }
  ],
  'terminale-3': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/terminale/economie/chapitre3/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/terminale/economie/chapitre3/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/terminale/economie/chapitre3/devoirs/devoir3.pdf' }
  ],
  'terminale-4': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/terminale/economie/chapitre4/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/terminale/economie/chapitre4/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/terminale/economie/chapitre4/devoirs/devoir3.pdf' }
  ],
  'terminale-5': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/terminale/economie/chapitre5/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/terminale/economie/chapitre5/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/terminale/economie/chapitre5/devoirs/devoir3.pdf' }
  ],
  
  // Terminale - Sociologie et Science Politique
  'terminale-6': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/terminale/sociologie-politique/chapitre6/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/terminale/sociologie-politique/chapitre6/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/terminale/sociologie-politique/chapitre6/devoirs/devoir3.pdf' }
  ],
  'terminale-7': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/terminale/sociologie-politique/chapitre7/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/terminale/sociologie-politique/chapitre7/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/terminale/sociologie-politique/chapitre7/devoirs/devoir3.pdf' }
  ],
  'terminale-8': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/terminale/sociologie-politique/chapitre8/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/terminale/sociologie-politique/chapitre8/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/terminale/sociologie-politique/chapitre8/devoirs/devoir3.pdf' }
  ],
  'terminale-9': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/terminale/sociologie-politique/chapitre9/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/terminale/sociologie-politique/chapitre9/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/terminale/sociologie-politique/chapitre9/devoirs/devoir3.pdf' }
  ],
  'terminale-10': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/terminale/sociologie-politique/chapitre10/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/terminale/sociologie-politique/chapitre10/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/terminale/sociologie-politique/chapitre10/devoirs/devoir3.pdf' }
  ],
  
  // Terminale - Regards Croisés
  'terminale-11': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/terminale/regards/chapitre11/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/terminale/regards/chapitre11/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/terminale/regards/chapitre11/devoirs/devoir3.pdf' }
  ],
  'terminale-12': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/terminale/regards/chapitre12/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/terminale/regards/chapitre12/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/terminale/regards/chapitre12/devoirs/devoir3.pdf' }
  ],
  
  // Première - Science Économique
  'premiere-1': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/economie/chapitre1/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/economie/chapitre1/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/economie/chapitre1/devoirs/devoir3.pdf' }
  ],
  'premiere-2': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/economie/chapitre2/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/economie/chapitre2/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/economie/chapitre2/devoirs/devoir3.pdf' }
  ],
  'premiere-3': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/economie/chapitre3/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/economie/chapitre3/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/economie/chapitre3/devoirs/devoir3.pdf' }
  ],
  'premiere-4': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/economie/chapitre4/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/economie/chapitre4/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/economie/chapitre4/devoirs/devoir3.pdf' }
  ],
  'premiere-5': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/economie/chapitre5/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/economie/chapitre5/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/economie/chapitre5/devoirs/devoir3.pdf' }
  ],
  
  // Première - Sociologie et Science Politique
  'premiere-6': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/sociologie-politique/chapitre6/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/sociologie-politique/chapitre6/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/sociologie-politique/chapitre6/devoirs/devoir3.pdf' }
  ],
  'premiere-7': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/sociologie-politique/chapitre7/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/sociologie-politique/chapitre7/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/sociologie-politique/chapitre7/devoirs/devoir3.pdf' }
  ],
  'premiere-8': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/sociologie-politique/chapitre8/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/sociologie-politique/chapitre8/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/sociologie-politique/chapitre8/devoirs/devoir3.pdf' }
  ],
  'premiere-9': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/sociologie-politique/chapitre9/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/sociologie-politique/chapitre9/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/sociologie-politique/chapitre9/devoirs/devoir3.pdf' }
  ],
  'premiere-10': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/sociologie-politique/chapitre10/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/sociologie-politique/chapitre10/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/sociologie-politique/chapitre10/devoirs/devoir3.pdf' }
  ],
  
  // Première - Regards Croisés
  'premiere-11': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/regards/chapitre11/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/regards/chapitre11/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/regards/chapitre11/devoirs/devoir3.pdf' }
  ],
  'premiere-12': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/premiere/regards/chapitre12/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/premiere/regards/chapitre12/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/premiere/regards/chapitre12/devoirs/devoir3.pdf' }
  ],
  
  // Seconde - Science Économique
  'seconde-1': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/seconde/economie/chapitre1/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/seconde/economie/chapitre1/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/seconde/economie/chapitre1/devoirs/devoir3.pdf' }
  ],
  'seconde-2': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/seconde/economie/chapitre2/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/seconde/economie/chapitre2/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/seconde/economie/chapitre2/devoirs/devoir3.pdf' }
  ],
  'seconde-3': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/seconde/economie/chapitre3/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/seconde/economie/chapitre3/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/seconde/economie/chapitre3/devoirs/devoir3.pdf' }
  ],
  
  // Seconde - Sociologie et Science Politique
  'seconde-4': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/seconde/sociologie-politique/chapitre4/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/seconde/sociologie-politique/chapitre4/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/seconde/sociologie-politique/chapitre4/devoirs/devoir3.pdf' }
  ],
  'seconde-5': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/seconde/sociologie-politique/chapitre5/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/seconde/sociologie-politique/chapitre5/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/seconde/sociologie-politique/chapitre5/devoirs/devoir3.pdf' }
  ],
  
  // Seconde - Regards Croisés
  'seconde-6': [
    { id: 'devoir1', title: 'Devoir 1', pdfPath: '/seconde/regards/chapitre6/devoirs/devoir1.pdf' },
    { id: 'devoir2', title: 'Devoir 2', pdfPath: '/seconde/regards/chapitre6/devoirs/devoir2.pdf' },
    { id: 'devoir3', title: 'Devoir 3', pdfPath: '/seconde/regards/chapitre6/devoirs/devoir3.pdf' }
  ],
};
