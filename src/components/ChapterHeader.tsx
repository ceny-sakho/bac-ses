import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface ChapterHeaderProps {
  title: string;
  subtitle?: string;
}

const ChapterHeader = ({ title, subtitle }: ChapterHeaderProps) => {
  const handleBack = () => window.history.back();

  return (
    <div className="border-b pb-4 mb-8">
      <Button
        variant="ghost"
        className="mb-4 hover:bg-gray-100"
        onClick={handleBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour
      </Button>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground mt-2">{subtitle}</p>
      )}
    </div>
  );
};

export default ChapterHeader;