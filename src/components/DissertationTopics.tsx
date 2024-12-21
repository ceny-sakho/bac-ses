import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, topicIndex: number) => {
    const file = event.target.files?.[0];
    if (file) {
      // Vérification du type de fichier
      if (file.type === 'application/pdf' || 
          file.type === 'application/msword' || 
          file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        
        toast({
          title: "Fichier accepté",
          description: `Le fichier ${file.name} a été téléchargé avec succès.`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Seuls les fichiers PDF et Word sont acceptés.",
        });
        event.target.value = '';
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
      
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="topic-0" className="w-full">
            <TabsList className="grid grid-cols-2 lg:grid-cols-5 gap-2">
              {topics.map((_, index) => (
                <TabsTrigger key={`tab-${index}`} value={`topic-${index}`}>
                  Sujet {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>

            {topics.map((topic, index) => (
              <TabsContent key={`content-${index}`} value={`topic-${index}`}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{topic}</h3>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor={`file-upload-${index}`}>
                      Télécharger votre fichier (PDF ou Word)
                    </Label>
                    <Input
                      id={`file-upload-${index}`}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(e, index)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};