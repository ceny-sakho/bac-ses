import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";

interface ChapterHeaderProps {
  title: string;
  subtitle?: string;
}

const ChapterHeader = ({ title, subtitle }: ChapterHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const handleBack = () => {
    const path = location.pathname;
    const from = searchParams.get('from');
    const expandedLevel = searchParams.get('expandedLevel');
    const expandedSubject = searchParams.get('expandedSubject');
    
    // Navigation vers la page des sujets du bac pour les exercices spécifiques
    if (path.includes('/dissertation/') || 
        path.includes('/ec1/') || 
        path.includes('/ec2/') || 
        path.includes('/ec3/')) {
      navigate('/sujets-bac');
    } 
    // Navigation vers la page d'accueil pour les autres cas
    else if (path === '/sujets-bac') {
      navigate('/');
    }
    // Si on vient du "Programme par niveau", retourner avec l'état d'expansion
    else if (from === 'programme' && expandedLevel && expandedSubject) {
      navigate(`/?expandedLevel=${encodeURIComponent(expandedLevel)}&expandedSubject=${encodeURIComponent(expandedSubject)}`);
    }
    else if (from === 'programme' && expandedLevel) {
      navigate(`/?expandedLevel=${encodeURIComponent(expandedLevel)}`);
    }
    // Fallback vers la page précédente
    else {
      navigate(-1);
    }
  };

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