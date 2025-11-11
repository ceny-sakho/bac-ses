import { DevoirsData } from '@/types/devoir';

export const devoirsData: DevoirsData = {
  'terminale-economie-1': [
    {
      id: '1',
      title: 'EC3 - Corrigé',
      description: 'Épreuve composée partie 3',
      date: 'Chapitre 1',
      pdfUrl: '/terminale/economie/chapitre1/devoirs-corrigés/liste-devoirs.json/EC3-Corrigé.pdf'
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
