import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PdfViewerProps {
  url: string;
  downloadFileName: string;
  loadingMessage: string;
  downloadButtonText: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({
  url,
  downloadFileName,
  loadingMessage,
  downloadButtonText,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    if (!url) return;

    const link = document.createElement("a");
    link.href = url;
    link.download = downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Téléchargement démarré",
      description: `${downloadButtonText} est en cours de téléchargement`,
    });
  };

  if (!url) {
    return (
      <div className="flex justify-center items-center h-[800px]">
        {loadingMessage}
      </div>
    );
  }

  return (
    <div>
      <div
        className="relative bg-white shadow-lg rounded-lg"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <embed
          src={url}
          className="w-full h-[800px] rounded-lg"
          type="application/pdf"
        />
        {isHovering && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <Button
              onClick={handleDownload}
              className="bg-gris-sideral hover:bg-[#2A292D] text-white flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              {downloadButtonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};