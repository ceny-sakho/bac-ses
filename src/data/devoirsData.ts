import { DevoirsData } from '@/types/devoir';

export const devoirsData: DevoirsData = {
  'terminale-economie-1': [
    {
      id: '1',
      title: 'Devoir n°1 - Croissance économique',
      description: 'Sources et limites de la croissance',
      date: 'Novembre 2024',
      pdfUrl: '/terminale/economie/chapitre1/devoirs-corriges/devoir1.pdf'
    },
    {
      id: '2',
      title: 'Devoir n°2 - PIB et développement',
      description: 'Analyse des indicateurs économiques',
      date: 'Décembre 2024',
      pdfUrl: '/terminale/economie/chapitre1/devoirs-corriges/devoir2.pdf'
    }
  ],
  'terminale-economie-2': [
    {
      id: '1',
      title: 'Devoir n°1 - Commerce international',
      description: 'Avantages comparatifs et échanges',
      date: 'Janvier 2025',
      pdfUrl: '/terminale/economie/chapitre2/devoirs-corriges/devoir1.pdf'
    }
  ]
};

export const getDevoirsForChapter = (level: string, subject: string, chapterId: string) => {
  const key = `${level}-${subject}-${chapterId}`;
  return devoirsData[key] || [];
};
