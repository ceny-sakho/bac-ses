import { DevoirsData } from '@/types/devoir';

export const devoirsData: DevoirsData = {
  'terminale-economie-1': [
    {
      id: '1',
      title: 'EC3 - Corrigé',
      description: 'Épreuve composée partie 3',
      date: 'Chapitre 1',
      pdfUrl: '/terminale/economie/chapitre1/devoirs-corriges/liste-devoirs.json/devoir1.pdf'
    }
  ],
  'terminale-economie-2': [
    {
      id: '1',
      title: 'Devoir n°1 - Commerce international',
      description: 'Avantages comparatifs et échanges',
      date: 'Chapitre 2',
      pdfUrl: '/terminale/economie/chapitre2/devoirs-corriges/liste-devoirs.json/devoir1.pdf'
    }
  ]
};

export const getDevoirsForChapter = (level: string, subject: string, chapterId: string) => {
  const key = `${level}-${subject}-${chapterId}`;
  return devoirsData[key] || [];
};
