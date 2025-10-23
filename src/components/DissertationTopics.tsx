import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { DissertationTable } from './dissertation/DissertationTable';
import { PdfViewer } from './shared/PdfViewer';
import { dissertationTopics } from '@/data/dissertationTopics';
import { DissertationTopic } from '@/types/dissertation';

interface DissertationTopicsProps {
  chapter: string;
  title: string;
}

export const DissertationTopics: React.FC<DissertationTopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();
  const [showPdf, setShowPdf] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<{ topic: DissertationTopic; index: number } | null>(null);

  const topics = dissertationTopics[chapter] || [];

  const handleTopicClick = (topic: DissertationTopic, index: number) => {
    console.log("Topic clicked:", topic, "Index:", index);
    setSelectedTopic({ topic, index });
    setShowPdf(true);
  };

  if (showPdf && selectedTopic) {
    const pdfUrl = `/dissertation/chapitre${chapter}/sujet-${selectedTopic.index + 1}.pdf`;
    const downloadFileName = `dissertation-chapitre${chapter}-sujet${selectedTopic.index + 1}.pdf`;
    
    console.log("Displaying PDF:", pdfUrl);
    console.log("Show PDF state:", showPdf);
    console.log("Selected topic:", selectedTopic);

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

        <h2 className="text-xl font-semibold mb-4">{selectedTopic.topic.question}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {selectedTopic.topic.year} - {selectedTopic.topic.location}
        </p>

        <PdfViewer
          url={pdfUrl}
          downloadFileName={downloadFileName}
          loadingMessage="Chargement du sujet..."
          downloadButtonText="Télécharger le sujet"
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