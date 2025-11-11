import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const [isHovering, setIsHovering] = useState(false);
  const [url, setUrl] = useState<string>('');

  const getSubjectFolder = (subject: string) => {
    if (subject === 'science-eco') return 'economie';
    if (subject === 'socio') return 'sociologie-politique';
    if (subject === 'regards') return 'regards';
    return 'economie';
  };

  const getLevelFolder = (level: string) => {
    if (level === 'seconde') return 'seconde';
    if (level === 'premiere') return 'premiere';
    if (level === 'terminale') return 'terminale';
    return 'terminale';
  };

  const getChapterNumber = (chapterId: string) => {
    return chapterId;
  };

  useEffect(() => {
    const levelFolder = getLevelFolder(level);
    const subjectFolder = getSubjectFolder(subject);
    const chapterNumber = getChapterNumber(chapterId);
    
    const devoirsPath = `/${levelFolder}/${subjectFolder}/chapitre${chapterNumber}/devoirs-corriges/devoirs.pdf`;
    setUrl(devoirsPath);
  }, [level, subject, chapterId]);

  const handleDownload = () => {
    if (!url) return;
    const link = document.createElement('a');
    link.href = url;
    link.download = `devoirs-corriges-chapitre${chapterId}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!url) {
    return <div className="text-center py-8">Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-700 text-center mb-4">
          Téléchargez ou consultez ici les devoirs corrigés du chapitre.
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
          src={url}
          type="application/pdf"
          className="w-full h-[800px]"
          title="Devoirs corrigés"
        />
      </div>
    </div>
  );
};
