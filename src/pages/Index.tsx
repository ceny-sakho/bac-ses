import { CourseNavigation } from "@/components/CourseNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <header className="bg-primary text-white py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Sciences Économiques et Sociales</h1>
        <p className="text-lg opacity-90">
          Ressources pédagogiques pour les lycéens
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Programme par niveau
          </h2>
          <CourseNavigation />
        </section>

        <section className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-primary">Seconde</h3>
            <p className="text-gray-600">
              Introduction aux concepts fondamentaux des SES
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-primary">Première</h3>
            <p className="text-gray-600">
              Approfondissement des notions économiques et sociales
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-primary">Terminale</h3>
            <p className="text-gray-600">
              Préparation au baccalauréat et concepts avancés
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Sciences Économiques et Sociales. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;