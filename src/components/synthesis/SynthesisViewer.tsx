import React, { useState, useEffect } from "react";
import { PdfViewer } from "../shared/PdfViewer";
import { getSubjectFolder, getLevelFolder, getChapterNumber, buildPdfPath } from "@/utils/pdfPathUtils";

interface SynthesisViewerProps {
  chapterId: string;
  subject: string;
  level: string;
}

export const SynthesisViewer: React.FC<SynthesisViewerProps> = ({
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
    
    const pdfPath = buildPdfPath(levelFolder, subjectFolder, chapterNumber, 'synthese');
    console.log("Final PDF path:", pdfPath);
    
    setUrl("");
    setTimeout(() => setUrl(pdfPath), 50);
  }, [level, subject, chapterId]);

  return (
    <PdfViewer
      url={url}
      downloadFileName={`synthese-${getLevelFolder(level)}-${getSubjectFolder(subject)}-chapitre${getChapterNumber(chapterId)}.pdf`}
      loadingMessage="Chargement de la synthèse..."
      downloadButtonText="Télécharger la synthèse"
    />
  );
};