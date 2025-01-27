import React, { useState, useEffect } from "react";
import { PdfViewer } from "../shared/PdfViewer";
import { getSubjectFolder, getLevelFolder, getChapterNumber, buildPdfPath } from "@/utils/pdfPathUtils";

interface NotionsViewerProps {
  chapterId: string;
  subject: string;
  level: string;
}

export const NotionsViewer: React.FC<NotionsViewerProps> = ({
  chapterId,
  subject,
  level,
}) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const chapterNumber = getChapterNumber(chapterId);
    const levelFolder = getLevelFolder(level);
    const subjectFolder = getSubjectFolder(subject);
    
    console.log("Building PDF path with:");
    console.log("Level folder:", levelFolder);
    console.log("Subject folder:", subjectFolder);
    console.log("Chapter number:", chapterNumber);
    
    const pdfPath = buildPdfPath(levelFolder, subjectFolder, chapterNumber, 'notions');
    console.log("Final PDF path:", pdfPath);
    
    setUrl("");
    setTimeout(() => setUrl(pdfPath), 50);
  }, [level, subject, chapterId]);

  return (
    <PdfViewer
      url={url}
      downloadFileName={`notions-${getLevelFolder(level)}-${getSubjectFolder(subject)}-chapitre${getChapterNumber(chapterId)}.pdf`}
      loadingMessage="Chargement des notions..."
      downloadButtonText="Télécharger les notions"
    />
  );
};