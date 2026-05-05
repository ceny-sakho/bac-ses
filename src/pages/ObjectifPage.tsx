import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { chaptersData } from "@/data/chaptersData";

const getSubjectFolder = (level: string, chapterNumber: number): string => {
  if (level === "seconde") {
    if (chapterNumber <= 3) return "economie";
    if (chapterNumber <= 5) return "sociologie-politique";
    return "regards";
  }
  if (chapterNumber <= 5) return "economie";
  if (chapterNumber <= 10) return "sociologie-politique";
  return "regards";
};

const ObjectifPage: React.FC = () => {
  const { chapterId, objectifNum } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isHovering, setIsHovering] = useState(false);

  const level = chapterId?.split("-")[0] || "terminale";
  const chNumStr = chapterId?.split("ch")[1] || "1";
  const chNum = parseInt(chNumStr, 10);
  const subjectFolder = getSubjectFolder(level, chNum);
  const num = objectifNum || "1";

  const pdfUrl = `/${level}/${subjectFolder}/chapitre${chNum}/synthese/objectif${num}/objectif-${num}.pdf`;
  const audioUrl = `/${level}/${subjectFolder}/chapitre${chNum}/synthese/objectif${num}/audio-${num}.mp3`;

  const chapter = chapterId ? chaptersData[chapterId] : undefined;
  const objectiveText = chapter?.objectives?.[parseInt(num, 10) - 1];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `objectif-${num}-${level}-${subjectFolder}-chapitre${chNum}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({ title: "Téléchargement démarré", description: "L'objectif est en cours de téléchargement" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapterId, objectifNum]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(`/chapitre/${chapterId}`)}
          className="mb-6 hover:bg-[#403E43] hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la synthèse
        </Button>

        <h1 className="text-2xl font-bold text-gris-sideral mb-6">
          Objectif {num}
          {objectiveText ? ` — ${objectiveText}` : ""}
        </h1>

        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Volume2 className="h-5 w-5 text-gris-sideral" />
              <h3 className="text-lg font-semibold text-gris-sideral">Audio de l'objectif</h3>
            </div>
            <audio controls className="w-full" src={audioUrl}>
              Votre navigateur ne supporte pas l'élément audio.
            </audio>
          </div>

          <div
            className="relative bg-white shadow-lg rounded-lg"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <embed src={pdfUrl} className="w-full h-[800px] rounded-lg" type="application/pdf" />
            {isHovering && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Button
                  onClick={handleDownload}
                  className="bg-gris-sideral hover:bg-[#2A292D] text-white flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Télécharger l'objectif
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectifPage;