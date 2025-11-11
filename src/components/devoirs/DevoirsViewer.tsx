import React from 'react';
import { FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate, useLocation } from 'react-router-dom';
import { getDevoirsForChapter } from '@/data/devoirsData';

interface DevoirsViewerProps {
  chapterId: string;
  subject: string;
  level: string;
}

export const DevoirsViewer: React.FC<DevoirsViewerProps> = ({ 
  chapterId, 
  subject, 
  level 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getSubjectFolder = (subject: string) => {
    if (subject === 'science-eco') return 'economie';
    if (subject === 'socio') return 'sociologie-politique';
    if (subject === 'regards') return 'regards';
    return 'economie';
  };

  const subjectFolder = getSubjectFolder(subject);
  const devoirs = getDevoirsForChapter(level, subjectFolder, chapterId);

  const handleDevoirClick = (devoirId: string) => {
    // Extract the chapter path from current location
    const chapterPath = location.pathname.split('/chapitre/')[1];
    navigate(`/chapitre/${chapterPath}/devoir/${devoirId}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Devoirs corrigés
        </h2>
        <p className="text-gray-700 text-center mb-4">
          Sélectionnez un devoir pour consulter ou télécharger le corrigé.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {devoirs.length === 0 ? (
          <div className="col-span-2 text-center py-8 text-gray-500">
            Aucun devoir disponible pour ce chapitre.
          </div>
        ) : (
          devoirs.map((devoir) => (
            <Card 
              key={devoir.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              onClick={() => handleDevoirClick(devoir.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B69B7D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#B69B7D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{devoir.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{devoir.description}</p>
                    {devoir.date && (
                      <p className="text-gray-500 text-xs">{devoir.date}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
