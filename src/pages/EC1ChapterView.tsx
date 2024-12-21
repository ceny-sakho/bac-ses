import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const EC1ChapterView = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const getChapterInfo = (id: string) => {
    const chapters: Record<string, { title: string; subtitle: string }> = {
      "ch1": { title: "Chapitre 1", subtitle: "EC1 : Croissance économique" },
      "ch2": { title: "Chapitre 2", subtitle: "EC1 : Commerce international" },
      "ch3": { title: "Chapitre 3", subtitle: "EC1 : Chômage" },
      "ch4": { title: "Chapitre 4", subtitle: "EC1 : Crises financières" },
      "ch5": { title: "Chapitre 5", subtitle: "EC1 : Politiques économiques européennes" },
      "ch6": { title: "Chapitre 6", subtitle: "EC1 : Structure sociale" },
      "ch7": { title: "Chapitre 7", subtitle: "EC1 : L'École" },
      "ch8": { title: "Chapitre 8", subtitle: "EC1 : Mobilité sociale" },
      "ch9": { title: "Chapitre 9", subtitle: "EC1 : Mutations du travail" },
      "ch10": { title: "Chapitre 10", subtitle: "EC1 : Engagement politique" },
      "ch11": { title: "Chapitre 11", subtitle: "EC1 : Justice sociale" },
      "ch12": { title: "Chapitre 12", subtitle: "EC1 : L'Environnement" },
    };
    return chapters[id] || { title: "Chapitre non trouvé", subtitle: "" };
  };

  const chapterInfo = getChapterInfo(chapterId || "");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-6 hover:bg-[#403E43] hover:text-white transition-colors"
          onClick={() => navigate("/ec1")}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
        
        <h1 className="text-3xl font-bold mb-2">{chapterInfo.title}</h1>
        <h2 className="text-xl text-gray-600 mb-8">{chapterInfo.subtitle}</h2>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-600">
            Contenu du chapitre à venir...
          </p>
        </div>
      </div>
    </div>
  );
};

export default EC1ChapterView;