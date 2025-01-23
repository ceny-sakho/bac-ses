import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { DissertationTable } from './dissertation/DissertationTable';
import { PdfViewer } from './dissertation/PdfViewer';
import { dissertationTopics } from '@/data/dissertationTopics';
import { DissertationTopic } from '@/types/dissertation';

interface DissertationTopicsProps {
  chapter: string;
  title: string;
}

export const DissertationTopics: React.FC<DissertationTopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();
  const [showPdf, setShowPdf] = useState(false);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState<number | null>(null);
  const [pdfFiles, setPdfFiles] = useState<{ [key: number]: string }>({});
  const { toast } = useToast();

  const topics = dissertationTopics[chapter] || [];

  useEffect(() => {
    if (!showPdf) {
      setSelectedTopicIndex(null);
    }
  }, [showPdf]);

  const handleTopicClick = (topic: DissertationTopic, index: number) => {
    setSelectedTopicIndex(index);
    setShowPdf(true);
  };

  const handleFileUpload = (file: File) => {
    if (selectedTopicIndex !== null) {
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

  if (showPdf) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => setShowPdf(false)}
          className="flex items-center gap-2 hover:bg-gris-sideral hover:text-white mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Button>

        <PdfViewer
          chapter={chapter}
          selectedTopicIndex={selectedTopicIndex}
          pdfFiles={pdfFiles}
          onFileUpload={handleFileUpload}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 hover:bg-gris-sideral hover:text-white mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Button>

      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <DissertationTable
        topics={topics}
        onTopicClick={handleTopicClick}
      />
    </div>
  );
};