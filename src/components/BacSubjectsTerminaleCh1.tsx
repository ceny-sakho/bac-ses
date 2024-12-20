import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const subjects = [
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

export const BacSubjectsTerminaleCh1 = () => {
  return (
    <ScrollArea className="h-[600px] w-full rounded-md border p-4">
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <Collapsible key={index}>
            <Card className="hover:bg-gray-50 transition-colors">
              <CardContent className="p-4">
                <CollapsibleTrigger className="flex w-full items-center justify-between">
                  <h3 className="text-lg font-medium">Sujet {index + 1}</h3>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4">
                  <div className="space-y-4">
                    <p className="text-gray-700">{subject}</p>
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-500">Espace pour les documents associés</p>
                      {/* Zone pour ajouter des documents ultérieurement */}
                    </div>
                  </div>
                </CollapsibleContent>
              </CardContent>
            </Card>
          </Collapsible>
        ))}
      </div>
    </ScrollArea>
  );
};