import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export const BacExercises = () => {
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
              <h4 className="text-lg font-medium">Objectifs de l'épreuve : compétences et connaissances évaluées</h4>
              <p className="text-gray-700">Il est demandé au candidat :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>de répondre à la question posée par le sujet ;</li>
                <li>de construire une argumentation à partir d'une problématique qu'il devra élaborer ;</li>
                <li>de mobiliser des connaissances et des informations pertinentes pour traiter le sujet, notamment celles figurant dans le dossier ;</li>
                <li>de rédiger en utilisant le vocabulaire économique et social spécifique approprié à la question et en organisant le développement sous la forme d'un plan cohérent qui ménage l'équilibre des parties.</li>
              </ul>
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

      <div className="mt-8">
        <img
          src="/lovable-uploads/124e4bf1-3216-478f-a781-a9415a9ef5c3.png"
          alt="Évaluation des compétences en sciences économiques et sociales"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};