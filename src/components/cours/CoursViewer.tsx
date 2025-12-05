import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CoursViewerProps {
  chapterId: string;
  subject: string;
  level: string;
  chapterTitle?: string;
  onBackToChapter?: () => void;
}

export const CoursViewer: React.FC<CoursViewerProps> = ({
  chapterId,
  subject,
  level,
  chapterTitle,
  onBackToChapter,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [url, setUrl] = useState<string>("");
  const [pdfExists, setPdfExists] = useState<boolean | null>(null);
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
        return "economie";
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
        return "premiere";
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
    
    const pdfPath = `/${levelFolder}/${subjectFolder}/chapitre${chapterNumber}/cours/cours${chapterNumber}.pdf`;
    
    // Check if PDF exists
    fetch(pdfPath, { method: 'HEAD' })
      .then(response => {
        setPdfExists(response.ok);
        if (response.ok) {
          setUrl(pdfPath);
        }
      })
      .catch(() => {
        setPdfExists(false);
      });
  }, [level, subject, chapterId]);

  const handleDownload = () => {
    if (!url) return;

    const link = document.createElement("a");
    link.href = url;
    const chapterNumber = getChapterNumber();
    link.download = `cours-${getLevelFolder()}-${getSubjectFolder()}-chapitre${chapterNumber}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Téléchargement démarré",
      description: "Le cours est en cours de téléchargement",
    });
  };

  const handleBack = () => {
    if (onBackToChapter) {
      onBackToChapter();
    }
  };

  const chapterNumber = getChapterNumber();
  const displayTitle = chapterTitle || `Chapitre ${chapterNumber}`;

  if (pdfExists === null) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-[600px]">
          Chargement du cours...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={handleBack}
        className="mb-6 hover:bg-[#403E43] hover:text-white"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour
      </Button>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Cours — {displayTitle}
      </h1>

      {pdfExists === false ? (
        <div className="flex justify-center items-center h-[600px] bg-white rounded-lg shadow-lg">
          <p className="text-gray-600 text-center px-4">
            Aucun fichier PDF disponible pour ce cours. Ajoutez-le via GitHub.
          </p>
        </div>
      ) : (
        <>
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
                  Télécharger le cours
                </Button>
              </div>
            )}
          </div>

          {/* Download Button (always visible on mobile) */}
          <div className="mt-6 flex justify-center md:hidden">
            <Button
              onClick={handleDownload}
              className="bg-gris-sideral hover:bg-[#2A292D] text-white flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Télécharger le cours
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
