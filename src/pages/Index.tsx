import { CourseNavigation } from "@/components/CourseNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F6F7] to-[#8E9196]">
      <header className="bg-[#333333] text-white py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-3">Sciences Économiques et Sociales</h1>
          <p className="text-xl opacity-90 mb-6">
            Ressources pédagogiques pour les lycéens
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-white text-[#333333] hover:bg-[#FEF7CD] transition-colors">
              Accéder aux cours
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto bg-white/95 rounded-lg shadow-xl p-8 mb-12 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/a5162db5-633a-4547-87db-526768b48f43.png" 
              alt="Sciences Économiques et Sociales" 
              className="w-full h-full object-cover rounded-lg opacity-10"
            />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-[#333333]">
                Programme par niveau
              </h2>
            </div>
            <CourseNavigation />
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          {[
            {
              level: "seconde",
              title: "Seconde",
              image: "/lovable-uploads/89254e68-90c5-4556-971b-28dec56ab9d6.png",
              description: "Introduction aux concepts fondamentaux des SES",
              resources: ["24 cours", "12 exercices", "6 évaluations"]
            },
            {
              level: "premiere",
              title: "Première",
              image: "/lovable-uploads/fbecfe6a-7020-4ea6-8f5d-d888a3c53444.png",
              description: "Approfondissement des notions économiques et sociales",
              resources: ["30 cours", "15 exercices", "8 évaluations"]
            },
            {
              level: "terminale",
              title: "Terminale",
              image: "/lovable-uploads/0f742317-47f2-4e9e-95fb-9d47abe06d84.png",
              description: "Préparation au baccalauréat et concepts avancés",
              resources: ["36 cours", "18 exercices", "10 évaluations"]
            }
          ].map((item) => (
            <Card key={item.level} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-[#333333]">{item.title}</h3>
                  <p className="text-[#8E9196] mb-4">{item.description}</p>
                  <div className="flex gap-4 mb-6">
                    {item.resources.map((resource, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-[#333333]">
                        {resource}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className="bg-white text-[#333333] border border-[#333333] hover:bg-[#FEF7CD] transition-colors"
                    onClick={() => navigate(`/niveau/${item.level}`)}
                  >
                    Accéder aux ressources
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </section>
      </main>

      <footer className="bg-[#333333] text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Sciences Économiques et Sociales. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;