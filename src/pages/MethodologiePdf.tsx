import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const methodologyTitles: Record<string, string> = {
  methodologie: "Méthodologie générale",
  dissertation: "Méthodologie — Dissertation",
  ec1: "Méthodologie — EC1",
  ec2: "Méthodologie — EC2",
  ec3: "Méthodologie — EC3",
};

const MethodologiePdf: React.FC = () => {
  const { type } = useParams();
  const [pdfExists, setPdfExists] = useState<boolean | null>(null);

  const methodType = type || "methodologie";
  const title = methodologyTitles[methodType] || "Méthodologie";
  const pdfUrl = `/methodologie/${methodType}/${methodType}.pdf`;

  useEffect(() => {
    document.title = `${title} | PDF`;
    
    // Check if PDF exists
    fetch(pdfUrl, { method: 'HEAD' })
      .then(response => {
        setPdfExists(response.ok && response.headers.get('content-type')?.includes('pdf'));
      })
      .catch(() => {
        setPdfExists(false);
      });
  }, [title, pdfUrl]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${methodType}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        className="flex items-center gap-2 hover:bg-gris-sideral hover:text-white mb-6"
        aria-label="Retour"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Button>

      <h1 className="text-2xl font-bold mb-6">{title}</h1>

      <section aria-label="Visionneuse PDF de méthodologie" className="relative group">
        {pdfExists === null ? (
          <div className="flex justify-center items-center h-[70vh] bg-white rounded-lg shadow-lg">
            <p className="text-gray-500">Chargement...</p>
          </div>
        ) : pdfExists ? (
          <>
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
          </>
        ) : null}
      </section>
    </main>
  );
};

export default MethodologiePdf;
