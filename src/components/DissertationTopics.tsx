import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft, Download, Upload } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useToast } from "@/hooks/use-toast";

interface DissertationTopicsProps {
  chapter: string;
  title: string;
}

export const DissertationTopics: React.FC<DissertationTopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();
  const [showPdf, setShowPdf] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState<number | null>(null);
  const [pdfFiles, setPdfFiles] = useState<{ [key: number]: string }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Définition des sujets spécifiques à chaque chapitre
  const getTopicsByChapter = () => {
    switch (chapter) {
      case '1':
        return [
          "Les facteurs travail et capital sont-ils suffisants pour expliquer la croissance ?",
          "Quel est le rôle du progrès technique dans le processus de croissance économique ?",
          "Comment le progrès technique favorise-t-il la croissance économique ?",
          "L'accroissement de la productivité globale des facteurs suffit-il à expliquer la croissance économique ?",
        ];
      case '2':
        return [
          "Le libre-échange est-il toujours bénéfique ?",
          "La mondialisation remet-elle en cause la souveraineté des États ?",
          "Le protectionnisme est-il une solution face aux déséquilibres du commerce international ?",
        ];
      case '3':
        return [
          "Le chômage est-il une fatalité ?",
          "Les politiques de l'emploi sont-elles efficaces ?",
          "Le plein emploi est-il un objectif atteignable ?",
        ];
      // Ajoutez d'autres cas pour les autres chapitres
      default:
        return ["Aucun sujet disponible pour ce chapitre"];
    }
  };

  const topics = getTopicsByChapter();

  const handleTopicClick = (topic: string, index: number) => {
    setSelectedTopicIndex(index);
    setShowPdf(true);
  };

  const handleDownload = () => {
    if (selectedTopicIndex === null) return;

    const pdfUrl = pdfFiles[selectedTopicIndex] || `/dissertation/chapitre${chapter}/sujet${selectedTopicIndex + 1}.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `dissertation-chapitre${chapter}-sujet${selectedTopicIndex + 1}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && selectedTopicIndex !== null) {
      if (file.type !== 'application/pdf') {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Veuillez sélectionner un fichier PDF",
        });
        return;
      }

      const url = URL.createObjectURL(file);
      setPdfFiles(prev => ({
        ...prev,
        [selectedTopicIndex]: url
      }));
      toast({
        title: "Succès",
        description: "Le fichier PDF a été téléchargé avec succès",
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (showPdf) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => setShowPdf(false)}
          className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Button>

        <div className="mb-6">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
            ref={fileInputRef}
          />
          <Button 
            onClick={triggerFileInput}
            className="bg-[#403E43] hover:bg-[#2A292D] text-white flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Télécharger un nouveau PDF
          </Button>
        </div>

        <div 
          className="relative bg-white shadow-lg rounded-lg"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <embed
            src={selectedTopicIndex !== null ? (pdfFiles[selectedTopicIndex] || `/dissertation/chapitre${chapter}/sujet${selectedTopicIndex + 1}.pdf`) : `/dissertation/chapitre${chapter}/sujet1.pdf`}
            className="w-full h-[800px] rounded-lg"
            type="application/pdf"
          />
          
          {isHovering && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Button 
                onClick={handleDownload}
                className="bg-[#403E43] hover:bg-[#2A292D] text-white flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Télécharger le PDF
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Button>

      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {topics.map((topic, index) => (
          <Card 
            key={index}
            className="cursor-pointer transition-colors duration-200 hover:bg-[#403E43] hover:text-white"
            onClick={() => handleTopicClick(topic, index)}
          >
            <CardContent className="p-6">
              <p className="text-lg">{topic}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};