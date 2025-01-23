import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface PdfViewerProps {
  chapter: string;
  selectedTopicIndex: number | null;
  pdfFiles: { [key: number]: string };
  onFileUpload: (file: File) => void;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({
  chapter,
  selectedTopicIndex,
  pdfFiles,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    if (selectedTopicIndex !== null) {
      const url = pdfFiles[selectedTopicIndex] || `/dissertation/chapitre${chapter}/sujet-${selectedTopicIndex + 1}.pdf`;
      setPdfUrl(url);
    }
  }, [selectedTopicIndex, pdfFiles, chapter]);

  const handleDownload = () => {
    if (selectedTopicIndex === null || !pdfUrl) return;

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `dissertation-chapitre${chapter}-sujet${selectedTopicIndex + 1}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!pdfUrl) return null;

  return (
    <div>
      <div 
        className="relative bg-white shadow-lg rounded-lg"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <embed
          src={pdfUrl}
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
              Télécharger le PDF
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};