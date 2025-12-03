import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const EC2Subject: React.FC = () => {
  const navigate = useNavigate();
  const { chapterId, sujetId } = useParams();

  const chapter = chapterId || "1";
  const sujetNumber = sujetId || "1";

  const pdfUrl = `/ec2/chapitre${chapter}/sujet-${sujetNumber}.pdf`;

  useEffect(() => {
    document.title = `EC2 Chapitre ${chapter} - Sujet ${sujetNumber} | PDF`;
  }, [chapter, sujetNumber]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `ec2-chapitre${chapter}-sujet-${sujetNumber}.pdf`;
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
        EC2 Chapitre {chapter} — Sujet {sujetNumber}
      </h1>

      <section aria-label="Visionneuse PDF du sujet" className="relative group">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <embed
            src={pdfUrl}
            type="application/pdf"
            className="w-full h-[70vh]"
          />
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
      </section>
    </main>
  );
};

export default EC2Subject;
