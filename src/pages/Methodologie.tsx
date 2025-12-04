import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const methodologyItems = [
  { id: "methodologie", label: "GRAND ORAL" },
  { id: "dissertation", label: "DISSERTATION" },
  { id: "ec1", label: "EC1" },
  { id: "ec2", label: "EC2" },
  { id: "ec3", label: "EC3" },
];

const Methodologie: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "Méthodologie | SES";
  }, []);

  // Get the chapter image from state if passed
  const chapterImage = location.state?.image || "";

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        className="flex items-center gap-2 hover:bg-gris-sideral hover:text-white mb-6"
        aria-label="Retour"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#C4B5A0] rounded-lg p-8 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Méthodologie</h1>
          <div className="w-full max-w-md space-y-4">
            {methodologyItems.map((item) => (
              <Button
                key={item.id}
                variant="outline"
                className="w-full bg-white hover:bg-gray-100 text-gray-800 font-medium py-6 text-lg"
                onClick={() => navigate(`/methodologie/${item.id}`)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        {chapterImage && (
          <div className="rounded-lg overflow-hidden">
            <img
              src={chapterImage}
              alt="Illustration du chapitre"
              className="w-full h-auto object-contain"
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Methodologie;
