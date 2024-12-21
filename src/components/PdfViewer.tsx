import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft, Download } from 'lucide-react';

const PdfViewer = () => {
  const { chapterId, topicId } = useParams();
  const navigate = useNavigate();

  const handleDownload = () => {
    const pdfUrl = '/sample.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `dissertation-${chapterId}-${topicId}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

      <div className="relative">
        <iframe
          src="/sample.pdf"
          className="w-full h-[800px] border rounded-lg"
          title="PDF Viewer"
        />
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Button 
            onClick={handleDownload}
            className="bg-[#403E43] hover:bg-[#2A292D] text-white flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Télécharger le PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;