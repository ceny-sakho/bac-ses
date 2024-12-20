import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export const BacExercises = () => {
  const navigate = useNavigate();
  
  const dissertationChapters = [
    { id: '1', title: 'Croissance économique' },
    { id: '2', title: 'Commerce international' },
    { id: '3', title: 'Chômage' },
    { id: '4', title: 'Crises financières' },
    { id: '5', title: 'Politiques économiques européennes' },
    { id: '6', title: 'Structure sociale' },
    { id: '7', title: "L'École" },
    { id: '8', title: 'Mobilité sociale' },
    { id: '9', title: 'Mutations du travail' },
    { id: '10', title: 'Engagement politique' },
    { id: '11', title: 'Justice sociale' },
    { id: '12', title: "L'Environnement" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Tabs defaultValue="dissertation" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dissertation">Dissertation</TabsTrigger>
          <TabsTrigger value="ec1">EC1</TabsTrigger>
          <TabsTrigger value="ec2">EC2</TabsTrigger>
          <TabsTrigger value="ec3">EC3</TabsTrigger>
        </TabsList>
        <TabsContent value="dissertation">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Dissertation s'appuyant sur un dossier documentaire</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dissertationChapters.map((chapter) => (
                  <Card 
                    key={chapter.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => navigate(`/dissertation/${chapter.id}`)}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-medium">Chapitre {chapter.id}</h4>
                      <p className="text-sm text-gray-600">{chapter.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ec1">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Épreuve composée - Partie 1</h3>
              <h4 className="text-lg font-medium">Objectifs de l'épreuve : compétences et connaissances évaluées</h4>
              <p className="text-gray-700">Cette épreuve comprend trois parties.</p>
              <p className="text-gray-700"><span className="font-medium">Partie 1 - Mobilisation des connaissances :</span> il est demandé au candidat de répondre à la question en faisant appel à ses connaissances acquises dans le cadre du programme.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ec2">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Épreuve composée - Partie 2</h3>
              <h4 className="text-lg font-medium">Objectifs de l'épreuve : compétences et connaissances évaluées</h4>
              <p className="text-gray-700"><span className="font-medium">Partie 2 - Étude d'un document :</span> il est demandé aux candidats de répondre aux questions en mobilisant ses connaissances acquises dans le cadre du programme et en adoptant une démarche méthodologique rigoureuse, de collecte et de traitement de l'information.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ec3">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Épreuve composée - Partie 3</h3>
              <h4 className="text-lg font-medium">Objectifs de l'épreuve : compétences et connaissances évaluées</h4>
              <p className="text-gray-700"><span className="font-medium">Partie 3 - Raisonnement s'appuyant sur un dossier documentaire :</span> il est demandé au candidat de traiter le sujet :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>en développant un raisonnement ;</li>
                <li>en exploitant les documents du dossier ;</li>
                <li>en faisant appel à ses connaissances personnelles ;</li>
                <li>en composant une introduction, un développement, une conclusion.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};