import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export const BacExercises = () => {
  const navigate = useNavigate();
  
  const dissertationChapters = [
    { id: '1', title: 'Dissertation 1 : Croissance économique' },
  ];

  const ec1Chapters = [
    { id: '1', title: 'EC1 : Croissance économique' },
  ];

  const ec2Chapters = [
    { id: '1', title: 'EC2 : Croissance économique' },
  ];

  const ec3Chapters = [
    { id: '1', title: 'EC3 : Croissance économique' },
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
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Objectifs de l'épreuve : compétences et connaissances évaluées</h3>
                <p className="text-gray-700 mb-2">Il est demandé au candidat :</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>de répondre à la question posée par le sujet ;</li>
                  <li>de construire une argumentation à partir d'une problématique qu'il devra élaborer ;</li>
                  <li>de mobiliser des connaissances et des informations pertinentes pour traiter le sujet, notamment celles figurant dans le dossier ;</li>
                  <li>de rédiger en utilisant le vocabulaire économique et social spécifique approprié à la question et en organisant le développement sous la forme d'un plan cohérent qui ménage l'équilibre des parties.</li>
                </ul>
              </div>
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
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Objectifs de l'épreuve : compétences et connaissances évaluées</h3>
                <p className="text-gray-700"><span className="font-medium">Partie 1 - Mobilisation des connaissances :</span> il est demandé au candidat de répondre à la question en faisant appel à ses connaissances acquises dans le cadre du programme.</p>
              </div>
              <h3 className="text-xl font-semibold mb-4">Chapitres EC1</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ec1Chapters.map((chapter) => (
                  <Card 
                    key={chapter.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => navigate(`/ec1/${chapter.id}`)}
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
        <TabsContent value="ec2">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Objectifs de l'épreuve : compétences et connaissances évaluées</h3>
                <p className="text-gray-700"><span className="font-medium">Partie 2 - Étude d'un document :</span> il est demandé aux candidats de répondre aux questions en mobilisant ses connaissances acquises dans le cadre du programme et en adoptant une démarche méthodologique rigoureuse, de collecte et de traitement de l'information.</p>
              </div>
              <h3 className="text-xl font-semibold mb-4">Chapitres EC2</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ec2Chapters.map((chapter) => (
                  <Card 
                    key={chapter.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => navigate(`/ec2/${chapter.id}`)}
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
        <TabsContent value="ec3">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Objectifs de l'épreuve : compétences et connaissances évaluées</h3>
                <p className="text-gray-700"><span className="font-medium">Partie 3 - Raisonnement s'appuyant sur un dossier documentaire :</span> il est demandé au candidat de traiter le sujet :</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>en développant un raisonnement ;</li>
                  <li>en exploitant les documents du dossier ;</li>
                  <li>en faisant appel à ses connaissances personnelles ;</li>
                  <li>en composant une introduction, un développement, une conclusion.</li>
                </ul>
              </div>
              <h3 className="text-xl font-semibold mb-4">Chapitres EC3</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ec3Chapters.map((chapter) => (
                  <Card 
                    key={chapter.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => navigate(`/ec3/${chapter.id}`)}
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
      </Tabs>
    </div>
  );
};