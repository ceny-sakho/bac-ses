export const getSubjectFolder = (subject: string) => {
  switch (subject) {
    case "science-eco":
      return "economie";
    case "socio":
      return "sociologie-politique";
    case "regards":
      return "regards";
    default:
      return "economie";
  }
};

export const getLevelFolder = (level: string) => {
  switch (level) {
    case "seconde":
      return "seconde";
    case "premiere":
      return "premiere";
    case "terminale":
      return "terminale";
    default:
      return "premiere";
  }
};

export const getChapterNumber = (chapterId: string) => {
  if (chapterId.includes('ch')) {
    const match = chapterId.match(/ch(\d+)/);
    return match ? match[1] : "1";
  }
  return chapterId;
};

export const buildPdfPath = (levelFolder: string, subjectFolder: string, chapterNumber: string, type: 'notions' | 'synthese') => {
  return `/${levelFolder}/${subjectFolder}/chapitre${chapterNumber}/${type}/${type}${chapterNumber}.pdf`;
};