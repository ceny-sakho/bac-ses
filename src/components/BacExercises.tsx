import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { premiereChapters } from "@/data/chapters/premiereChapters";
import { terminaleChapters } from "@/data/chapters/terminaleChapters";

export const BacExercises = () => {
  const navigate = useNavigate();

  const premiereChaptersList = Object.entries(premiereChapters).map(([id, chapter]) => ({
    id,
    ...chapter,
  }));

  const terminaleChaptersList = Object.entries(terminaleChapters).map(([id, chapter]) => ({
    id,
    ...chapter,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Exercices du Bac</h2>
      <Tabs defaultValue="premiere" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="premiere">Première</TabsTrigger>
          <TabsTrigger value="terminale">Terminale</TabsTrigger>
        </TabsList>

        <TabsContent value="premiere">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {premiereChaptersList.map((chapter) => (
              <div key={chapter.id}>
                <Card
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(`/niveau/premiere/chapitre/${chapter.id}`)}
                >
                  <CardContent className="p-4">
                    <h4 className="font-medium">Chapitre {chapter.id}</h4>
                    <p className="text-sm text-gray-600">{chapter.title}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="terminale">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {terminaleChaptersList.map((chapter) => (
              <div key={chapter.id}>
                <Card
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(`/niveau/terminale/chapitre/${chapter.id}`)}
                >
                  <CardContent className="p-4">
                    <h4 className="font-medium">Chapitre {chapter.id}</h4>
                    <p className="text-sm text-gray-600">{chapter.title}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};