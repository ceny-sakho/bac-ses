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
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Dissertation</h3>
              <p>Contenu de la dissertation...</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ec1">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Épreuve Composée 1</h3>
              <p>Contenu de l'EC1...</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ec2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Épreuve Composée 2</h3>
              <p>Contenu de l'EC2...</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ec3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Épreuve Composée 3</h3>
              <p>Contenu de l'EC3...</p>
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