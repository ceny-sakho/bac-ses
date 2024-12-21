import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft, Upload } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useToast } from "@/hooks/use-toast";

interface DissertationTopicsProps {
  chapter: string;
  title: string;
}

export const DissertationTopics: React.FC<DissertationTopicsProps> = ({ chapter, title }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const topics = [
    "Les facteurs travail et capital sont-ils suffisants pour expliquer la croissance ?",
    "Quel est le rôle du progrès technique dans le processus de croissance économique ?",
    "Comment le progrès technique favorise-t-il la croissance économique ?",
    "L'accroissement de la productivité globale des facteurs suffit-il à expliquer la croissance économique ?",
    "Comment l'innovation peut-elle contribuer à reculer les limites écologiques d'une croissance soutenable ?",
    "Quel est le rôle de l'innovation sur la croissance économique ?",
    "L'accumulation des facteurs de production est-elle la seule source de croissance économique ?",
    "Les limites écologiques sont-elles le seul défi posé par la croissance économique ?",
    "L'accumulation des facteurs de production permet-elle, à elle seule, d'expliquer la croissance économique ?",
    "Quelles sont les sources de la croissance économique ?"
  ];

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, topic: string) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        toast({
          title: "Erreur",
          description: "Veuillez sélectionner un fichier PDF",
          variant: "destructive",
        });
        return;
      }

      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('topic', topic);
        formData.append('chapter', chapter);

        const response = await fetch('/api/upload-pdf', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Erreur lors du téléchargement');
        }

        const data = await response.json();
        
        toast({
          title: "Succès",
          description: `Le fichier ${file.name} a été téléchargé pour le sujet "${topic}"`,
        });
      } catch (error) {
        console.error('Erreur de téléchargement:', error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors du téléchargement du fichier",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 hover:bg-[#403E43] hover:text-white mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Button>

      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {topics.map((topic, index) => (
          <Card 
            key={index}
            className="cursor-pointer transition-colors duration-200 hover:bg-[#403E43] hover:text-white"
          >
            <CardContent className="p-6 flex justify-between items-center">
              <p className="text-lg">{topic}</p>
              {index === 0 && (
                <div className="flex items-center">
                  <input
                    type="file"
                    id={`file-upload-${index}`}
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e, topic)}
                    className="hidden"
                  />
                  <label
                    htmlFor={`file-upload-${index}`}
                    className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    <Upload className="h-4 w-4" />
                    Ajouter un PDF
                  </label>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};