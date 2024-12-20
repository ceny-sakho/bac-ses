import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ChapterHeaderProps {
  category: string;
  level: string;
  title: string;
  getCurrentTab: () => string;
  handleTabChange: (value: string) => void;
}

export const ChapterHeader: React.FC<ChapterHeaderProps> = ({
  category,
  level,
  title,
  getCurrentTab,
  handleTabChange
}) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-medium">{category}</span>
              <Badge 
                variant="secondary" 
                className="bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200" 
                onClick={() => navigate('/')}
              >
                {level}
              </Badge>
            </div>
          </div>
          <Tabs defaultValue={getCurrentTab()} className="w-full" onValueChange={handleTabChange}>
            <TabsList className="w-full justify-start bg-[#333333] text-white">
              <TabsTrigger 
                value="science-eco" 
                className="flex-1 text-white data-[state=active]:bg-[#444444] data-[state=active]:text-white"
              >
                Science économique
              </TabsTrigger>
              <TabsTrigger 
                value="socio" 
                className="flex-1 text-white data-[state=active]:bg-[#444444] data-[state=active]:text-white"
              >
                Sociologie / Science politique
              </TabsTrigger>
              <TabsTrigger 
                value="regards" 
                className="flex-1 text-white data-[state=active]:bg-[#444444] data-[state=active]:text-white"
              >
                Regards croisés
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <h1 className="text-4xl font-bold text-gray-900">
            Chapitre - {title}
          </h1>
        </div>
      </div>
    </header>
  );
};