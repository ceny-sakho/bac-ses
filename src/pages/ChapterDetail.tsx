import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { chaptersData } from "@/data/chaptersData";
import { ChapterData } from "@/data/types";
import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterContent } from "@/components/ChapterContent";

const normalizeString = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const ChapterDetail = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  // Normalize the chapterId to handle accents
  const normalizedChapterId = chapterId ? normalizeString(chapterId) : "";
  
  // Find the chapter by comparing normalized keys
  const chapter = Object.entries(chaptersData).find(([key]) => 
    normalizeString(key) === normalizedChapterId
  );

  if (!chapter) {
    return <div className="p-4">Chapitre non trouvé</div>;
  }

  const chapterData = chapter[1] as ChapterData;

  const getCurrentTab = () => {
    const chapterNumber = parseInt(chapterId?.split('ch')[1] || "1");
    if (chapterId?.startsWith('seconde')) {
      if (chapterNumber >= 1 && chapterNumber <= 3) return "science-eco";
      if (chapterNumber >= 4 && chapterNumber <= 5) return "socio";
      return "regards";
    }
    if (chapterId?.startsWith('premiere') || chapterId?.startsWith('terminale')) {
      if (chapterNumber >= 1 && chapterNumber <= 5) return "science-eco";
      if (chapterNumber >= 6 && chapterNumber <= 10) return "socio";
      return "regards";
    }
    return "science-eco";
  };

  const handleTabChange = (value: string) => {
    navigate(`/matiere/${value}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ChapterHeader
        category={chapterData.category}
        level={chapterData.level}
        title={chapterData.title}
        getCurrentTab={getCurrentTab}
        handleTabChange={handleTabChange}
      />
      <ChapterContent
        objectives={chapterData.objectives}
        image={chapterData.image}
      />
    </div>
  );
};

export default ChapterDetail;