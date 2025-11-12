import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Volume2, BookOpen, GraduationCap, BookOpenText, ClipboardCheck } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

interface SynthesisViewerProps {
  chapterId: string;
  subject: string;
  level: string;
  image?: string;
  onBackToChapter?: () => void;
  onShowDevoirs?: () => void;
}

export const SynthesisViewer: React.FC<SynthesisViewerProps> = ({
  chapterId,
  subject,
  level,
  image,
  onBackToChapter,
  onShowDevoirs,
}) => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [url, setUrl] = useState<string>("");
  const [audioUrl, setAudioUrl] = useState<string>("");
  const { toast } = useToast();

  const getSubjectFolder = () => {
    switch (subject) {
      case "science-eco":
        return "economie";
      case "socio":
        return "sociologie-politique";
      case "regards":
        return "regards";
      default:
        return "economie"; // Par défaut, on utilise "economie"
    }
  };

  const getLevelFolder = () => {
    switch (level) {
      case "seconde":
        return "seconde";
      case "premiere":
        return "premiere";
      case "terminale":
        return "terminale";
      default:
        return "premiere"; // Par défaut, on utilise "premiere"
    }
  };

  const getChapterNumber = () => {
    if (chapterId.includes('ch')) {
      const match = chapterId.match(/ch(\d+)/);
      return match ? match[1] : "1";
    }
    return chapterId;
  };

  useEffect(() => {
    const chapterNumber = getChapterNumber();
    const levelFolder = getLevelFolder();
    const subjectFolder = getSubjectFolder();
    
    // Ajout de console.log pour déboguer
    console.log("Building PDF path with:");
    console.log("Level folder:", levelFolder);
    console.log("Subject folder:", subjectFolder);
    console.log("Chapter number:", chapterNumber);
    
    const pdfPath = `/${levelFolder}/${subjectFolder}/chapitre${chapterNumber}/synthese/synthese${chapterNumber}.pdf`;
    const audioPath = `/${levelFolder}/${subjectFolder}/chapitre${chapterNumber}/synthese/audio${chapterNumber}.mp3`;
    console.log("Final PDF path:", pdfPath);
    console.log("Final Audio path:", audioPath);
    
    setUrl("");
    setAudioUrl("");
    setTimeout(() => {
      setUrl(pdfPath);
      setAudioUrl(audioPath);
    }, 50);
  }, [level, subject, chapterId]);

  const handleDownload = () => {
    if (!url) return;

    const link = document.createElement("a");
    link.href = url;
    const chapterNumber = getChapterNumber();
    link.download = `synthese-${getLevelFolder()}-${getSubjectFolder()}-chapitre${chapterNumber}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Téléchargement démarré",
      description: "La synthèse est en cours de téléchargement",
    });
  };

  if (!url) {
    return (
      <div className="flex justify-center items-center h-[800px]">
        Chargement de la synthèse...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Lecteur Audio */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Volume2 className="h-5 w-5 text-gris-sideral" />
          <h3 className="text-lg font-semibold text-gris-sideral">Audio de la synthèse</h3>
        </div>
        <audio 
          controls 
          className="w-full"
          src={audioUrl}
        >
          Votre navigateur ne supporte pas l'élément audio.
        </audio>
      </div>

      {/* PDF Viewer */}
      <div
        className="relative bg-white shadow-lg rounded-lg"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <embed
          src={url}
          className="w-full h-[800px] rounded-lg"
          type="application/pdf"
        />
        {isHovering && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <Button
              onClick={handleDownload}
              className="bg-gris-sideral hover:bg-[#2A292D] text-white flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Télécharger la synthèse
            </Button>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      {onBackToChapter && onShowDevoirs && (
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-[#B69B7D] hover:bg-[#9F876C] flex items-center gap-2"
            onClick={onBackToChapter}
          >
            <BookOpen className="w-5 h-5" />
            DÉCOUVRIR LE COURS
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="flex items-center gap-2 bg-[#403E43] text-white cursor-default"
          >
            <BookOpenText className="w-5 h-5" />
            SYNTHÈSE
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white"
            onClick={onShowDevoirs}
          >
            <ClipboardCheck className="w-5 h-5" />
            DEVOIRS CORRIGÉS
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white"
            onClick={() => navigate('/sujets-bac')}
          >
            <GraduationCap className="w-5 h-5" />
            SUJETS BAC
          </Button>
        </div>
      )}
    </div>
  );
};