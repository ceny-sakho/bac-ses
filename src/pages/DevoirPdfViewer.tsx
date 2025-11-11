import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getDevoirsForChapter } from '@/data/devoirsData';

const DevoirPdfViewer: React.FC = () => {
  const navigate = useNavigate();
  const { chapterId, devoirId } = useParams();
  const [isHovering, setIsHovering] = useState(false);

  // Extract level, subject, and chapter number from chapterId
  const getChapterInfo = () => {
    if (!chapterId) return { level: 'terminale', subject: 'economie', chapterNumber: '1' };
    
    const parts = chapterId.split('-');
    const level = parts[0]; // terminale, premiere, seconde
    const chapterNumber = parts[parts.length - 1].replace('ch', ''); // Extract number from ch1, ch2, etc.
    
    let subject = 'economie';
    if (chapterId.includes('socio')) {
      subject = 'sociologie-politique';
    } else if (chapterId.includes('regards')) {
      subject = 'regards';
    }
    
    return { level, subject, chapterNumber };
  };

  const { level, subject, chapterNumber } = getChapterInfo();
  const devoirs = getDevoirsForChapter(level, subject, chapterNumber);
  const devoir = devoirs.find(d => d.id === devoirId);

  const handleDownload = () => {
    if (!devoir) return;
    const link = document.createElement('a');
    link.href = devoir.pdfUrl;
    link.download = `devoir-${devoirId}-chapitre${chapterNumber}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!devoir) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Button>
        <div className="text-center py-8">
          <p className="text-gray-500">Devoir non trouvé</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux devoirs
      </Button>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-2">{devoir.title}</h1>
          <p className="text-gray-600 mb-4">{devoir.description}</p>
          <p className="text-gray-700 text-center">
            Téléchargez ou consultez ici le devoir corrigé.
          </p>
        </div>

        <div 
          className="relative w-full bg-white rounded-lg shadow-sm overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering && (
            <div className="absolute top-4 right-4 z-10">
              <Button
                onClick={handleDownload}
                variant="secondary"
                size="sm"
                className="shadow-lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger
              </Button>
            </div>
          )}
          
          <embed
            src={devoir.pdfUrl}
            type="application/pdf"
            className="w-full h-[800px]"
            title={devoir.title}
          />
        </div>
      </div>
    </main>
  );
};

export default DevoirPdfViewer;
