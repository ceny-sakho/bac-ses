import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const typeLabels: Record<string, string> = {
  dissertation: 'Dissertation',
  ec2: 'EC2',
  ec3: 'EC3',
};

const CorrigeSubject: React.FC = () => {
  const navigate = useNavigate();
  const { type, chapterId, sujetId } = useParams();
  const chapter = chapterId || '1';
  const sujetNumber = sujetId || '1';
  const safeType = (type && typeLabels[type]) ? type : 'dissertation';

  const pdfUrl = `/${safeType}/chapitre${chapter}/corrige/corrige-sujet-${sujetNumber}.pdf`;

  const [exists, setExists] = useState<boolean | null>(null);

  useEffect(() => {
    document.title = `${typeLabels[safeType]} Chapitre ${chapter} - Corrigé ${sujetNumber} | PDF`;
    let cancelled = false;
    fetch(pdfUrl, { method: 'HEAD' })
      .then((res) => {
        if (cancelled) return;
        const ct = res.headers.get('content-type') || '';
        setExists(res.ok && !ct.includes('text/html'));
      })
      .catch(() => !cancelled && setExists(false));
    return () => {
      cancelled = true;
    };
  }, [pdfUrl, safeType, chapter, sujetNumber]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${safeType}-chapitre${chapter}-corrige-sujet-${sujetNumber}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 hover:bg-gris-sideral hover:text-white mb-6"
        aria-label="Retour"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Button>

      <h1 className="text-2xl font-bold mb-6">
        {typeLabels[safeType]} Chapitre {chapter} — Corrigé {sujetNumber}
      </h1>

      <section aria-label="Visionneuse PDF du corrigé" className="relative group">
        {exists === false ? (
          <div className="bg-white rounded-lg shadow-lg p-10 text-center text-gray-700">
            Corrigé non encore disponible.
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <embed src={pdfUrl} type="application/pdf" className="w-full h-[70vh]" />
            </div>
            <div className="flex justify-center mt-4">
              <Button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-gris-sideral hover:bg-gris-sideral/90 text-white"
              >
                <Download className="h-4 w-4" />
                Télécharger le PDF
              </Button>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default CorrigeSubject;