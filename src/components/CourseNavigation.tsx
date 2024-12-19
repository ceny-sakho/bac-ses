import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

const courseStructure = {
  Seconde: {
    "Science économique": ["Chapitre 1", "Chapitre 2", "Chapitre 3"],
    "Sociologie et Science politique": ["Chapitre 1", "Chapitre 2", "Chapitre 3"],
    "Regards croisés": ["Chapitre 1", "Chapitre 2"],
  },
  Première: {
    "Science économique": ["Chapitre 1", "Chapitre 2", "Chapitre 3"],
    "Sociologie et Science politique": ["Chapitre 1", "Chapitre 2", "Chapitre 3"],
    "Regards croisés": ["Chapitre 1", "Chapitre 2"],
  },
  Terminale: {
    "Science économique": ["Chapitre 1", "Chapitre 2", "Chapitre 3"],
    "Sociologie et Science politique": ["Chapitre 1", "Chapitre 2", "Chapitre 3"],
    "Regards croisés": ["Chapitre 1", "Chapitre 2"],
  },
};

export const CourseNavigation = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(courseStructure).map(([level, subjects]) => (
          <AccordionItem value={level} key={level}>
            <AccordionTrigger className="text-lg font-semibold hover:text-primary">
              {level}
            </AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="pl-4">
                {Object.entries(subjects).map(([subject, chapters]) => (
                  <AccordionItem value={`${level}-${subject}`} key={subject}>
                    <AccordionTrigger className="text-md hover:text-primary">
                      {subject}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="pl-4 space-y-2">
                        {chapters.map((chapter) => (
                          <li
                            key={chapter}
                            className="flex items-center space-x-2 text-sm hover:text-primary cursor-pointer transition-colors"
                          >
                            <ChevronRight className="h-4 w-4" />
                            <span>{chapter}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};