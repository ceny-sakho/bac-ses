import { CourseNavigation } from "@/components/CourseNavigation";

const Index = () => {
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
          <p className="text-xl opacity-90">
            Ressources pédagogiques pour les lycéens
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-12 backdrop-blur-sm bg-white/90">
          <h2 className="text-2xl font-semibold text-center mb-8 text-[#333333]">
            Programme par niveau
          </h2>
          <CourseNavigation />
        </section>

        <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80"
                alt="Seconde"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#333333]">Seconde</h3>
            <p className="text-[#8E9196]">
              Introduction aux concepts fondamentaux des SES
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80"
                alt="Première"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#333333]">Première</h3>
            <p className="text-[#8E9196]">
              Approfondissement des notions économiques et sociales
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80"
                alt="Terminale"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#333333]">Terminale</h3>
            <p className="text-[#8E9196]">
              Préparation au baccalauréat et concepts avancés
            </p>
          </div>
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