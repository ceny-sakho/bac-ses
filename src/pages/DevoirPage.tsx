import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Download } from 'lucide-react';
import { devoirsData } from '@/data/devoirsData';

const DevoirPage = () => {
  const { level, chapterId, devoirId } = useParams();
  const navigate = useNavigate();

  // Extract chapter number from chapterId (e.g., "ch1" -> "1")
  const chapterNumber = chapterId?.replace('ch', '') || '';
  const devoirKey = `${level}-${chapterNumber}`;
  const devoirs = devoirsData[devoirKey] || [];
  const devoirIndex = parseInt(devoirId || '1') - 1;
  const devoir = devoirs[devoirIndex];

  const handleBack = () => {
    window.history.back();
  };

  const handleDownload = () => {
    if (devoir) {
      const link = document.createElement('a');
      link.href = devoir.pdfPath;
      link.download = `devoir-${devoirId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white"
          >
            <BookOpen className="h-4 w-4" />
            Retour
          </Button>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Devoir {devoirId} - {level === 'terminale' ? 'Terminale' : level === 'premiere' ? 'Première' : 'Seconde'}
        </h1>

        {devoir ? (
          <>
            <div className="flex justify-center mb-6">
              <Button 
                size="lg" 
                className="bg-[#B69B7D] hover:bg-[#9F876C] flex items-center gap-2"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5" />
                Télécharger le PDF
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
              <iframe
                src={devoir.pdfPath}
                width="100%"
                height="800px"
                className="rounded-lg"
                title={devoir.title}
              >
                <p className="text-center py-8">
                  Votre navigateur ne supporte pas l'affichage des PDF.{' '}
                  <a
                    href={devoir.pdfPath}
                    className="text-blue-600 hover:underline"
                    download
                  >
                    Télécharger le PDF
                  </a>
                </p>
              </iframe>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-500 text-center text-lg">
              Aucun PDF disponible pour ce devoir. Ajoutez-le via GitHub.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevoirPage;
