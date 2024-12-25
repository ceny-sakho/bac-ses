import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from 'react-router-dom';

export const BacExercises = () => {
  const location = useLocation();
  const defaultTab = location.state?.activeTab || 'dissertation';

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-8">Sujets de bac</h1>
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="dissertation">Dissertation</TabsTrigger>
          <TabsTrigger value="ec1">EC1</TabsTrigger>
          <TabsTrigger value="ec2">EC2</TabsTrigger>
          <TabsTrigger value="ec3">EC3</TabsTrigger>
        </TabsList>
        <TabsContent value="dissertation">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <a
                key={i}
                href={`/dissertation/${i + 1}`}
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  Chapitre {i + 1}
                </h5>
                <p className="font-normal text-gray-700">
                  Voir les sujets de dissertation
                </p>
              </a>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ec1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <a
                key={i}
                href={`/ec1/${i + 1}`}
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  Chapitre {i + 1}
                </h5>
                <p className="font-normal text-gray-700">
                  Voir les sujets d'EC1
                </p>
              </a>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ec2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <a
                key={i}
                href={`/ec2/${i + 1}`}
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  Chapitre {i + 1}
                </h5>
                <p className="font-normal text-gray-700">
                  Voir les sujets d'EC2
                </p>
              </a>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ec3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <a
                key={i}
                href={`/ec3/${i + 1}`}
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  Chapitre {i + 1}
                </h5>
                <p className="font-normal text-gray-700">
                  Voir les sujets d'EC3
                </p>
              </a>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};