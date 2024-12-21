import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const EC1View = () => {
  const navigate = useNavigate();

  const chapters = [
    { id: "ch1", title: "Chapitre 1", subtitle: "EC1 : Croissance économique" },
    { id: "ch2", title: "Chapitre 2", subtitle: "EC1 : Commerce international" },
    { id: "ch3", title: "Chapitre 3", subtitle: "EC1 : Chômage" },
    { id: "ch4", title: "Chapitre 4", subtitle: "EC1 : Crises financières" },
    { id: "ch5", title: "Chapitre 5", subtitle: "EC1 : Politiques économiques européennes" },
    { id: "ch6", title: "Chapitre 6", subtitle: "EC1 : Structure sociale" },
    { id: "ch7", title: "Chapitre 7", subtitle: "EC1 : L'École" },
    { id: "ch8", title: "Chapitre 8", subtitle: "EC1 : Mobilité sociale" },
    { id: "ch9", title: "Chapitre 9", subtitle: "EC1 : Mutations du travail" },
    { id: "ch10", title: "Chapitre 10", subtitle: "EC1 : Engagement politique" },
    { id: "ch11", title: "Chapitre 11", subtitle: "EC1 : Justice sociale" },
    { id: "ch12", title: "Chapitre 12", subtitle: "EC1 : L'Environnement" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Épreuve Composée 1 (EC1)</h1>
        
        <Card className="bg-white p-6">
          <CardContent>
            <Tabs defaultValue="ch1" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {chapters.map((chapter) => (
                  <TabsTrigger
                    key={chapter.id}
                    value={chapter.id}
                    className="w-full text-left p-4 hover:bg-[#444444] data-[state=active]:bg-[#444444]"
                    onClick={() => navigate(`/ec1/${chapter.id}`)}
                  >
                    <div>
                      <div className="font-medium">{chapter.title}</div>
                      <div className="text-sm opacity-90">{chapter.subtitle}</div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EC1View;