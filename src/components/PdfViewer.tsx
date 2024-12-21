import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

const PdfViewer = () => {
  const navigate = useNavigate();
  const { pdfUrl } = useParams();

  if (!pdfUrl) {
    return <div>URL du PDF non trouvée</div>;
  }

  const decodedUrl = decodeURIComponent(pdfUrl);
  
  // Transformer l'URL Google Drive en URL de prévisualisation
  const getPreviewUrl = (url: string) => {
    const fileId = url.match(/\/d\/(.+?)\/view/)?.[1];
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return url;
  };

  const previewUrl = getPreviewUrl(decodedUrl);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-4 hover:bg-[#403E43] hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
        <div className="w-full h-[calc(100vh-120px)]">
          <iframe
            src={previewUrl}
            className="w-full h-full border-0 rounded-lg shadow-lg"
            title="PDF Viewer"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;