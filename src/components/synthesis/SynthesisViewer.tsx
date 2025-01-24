import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

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
  const [isHovering, setIsHovering] = useState(false);
  const [url, setUrl] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    // Construire le chemin du PDF en fonction du niveau, de la matière et du chapitre
    const getSubjectFolder = () => {
      switch (subject) {
        case "science-eco":
          return "économie";
        case "socio":
          return "sociologie-politique";
        case "regards":
          return "regards";
        default:
          return "";
      }
    };

    // Construire le chemin complet du PDF
    const pdfPath = `/public/${level}/${getSubjectFolder()}/chapitre${chapterId}/`;
    setUrl("");
    setTimeout(() => setUrl(pdfPath), 50);
  }, [level, subject, chapterId]);

  const handleDownload = () => {
    if (!url) return;

    const link = document.createElement('a');
    link.href = url;
    link.download = `synthèse-${level}-${getSubjectFolder()}-chapitre${chapterId}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Téléchargement démarré",
      description: "La synthèse est en cours de téléchargement",
    });
  };

  const getSubjectFolder = () => {
    switch (subject) {
      case "science-eco":
        return "économie";
      case "socio":
        return "sociologie-politique";
      case "regards":
        return "regards";
      default:
        return "";
    }
  };

  if (!url) {
    return <div className="flex justify-center items-center h-[800px]">Chargement de la synthèse...</div>;
  }

  return (
    <div>
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
    </div>
  );
};