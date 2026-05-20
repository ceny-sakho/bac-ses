import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PdfViewer } from "@/components/dissertation/PdfViewer";
import { useAppNavigation } from "@/contexts/NavigationContext";


const DissertationSubject: React.FC = () => {
  const { back } = useAppNavigation();
  const { chapterId, sujetId } = useParams();

  const chapter = chapterId || "1";
  const sujetNumber = Number(sujetId);
  const selectedIndex = isNaN(sujetNumber) ? 0 : Math.max(0, sujetNumber - 1);

  useEffect(() => {
    document.title = `Dissertation Chapitre ${chapter} - Sujet ${sujetId} | PDF`;
  }, [chapter, sujetId]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => back(`/dissertation/${chapter}`)}
        className="flex items-center gap-2 hover:bg-gris-sideral hover:text-white mb-6"
        aria-label="Retour"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Button>

      <h1 className="text-2xl font-bold mb-6">
        Dissertation Chapitre {chapter} — Sujet {sujetId}
      </h1>

      <section aria-label="Visionneuse PDF du sujet">
        <PdfViewer
          chapter={chapter}
          selectedTopicIndex={selectedIndex}
          pdfFiles={{}}
          onFileUpload={() => {}}
        />
      </section>
    </main>
  );
};

export default DissertationSubject;
