const Devoir2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Devoir 2 - Terminale</h1>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <iframe
            src="https://raw.githubusercontent.com/ceny-sakho/bac-ses/main/public/devoirs/terminale/chapitre1/devoir2.pdf"
            width="100%"
            height="800px"
            className="rounded-lg"
          >
            <p className="text-center py-8">
              Votre navigateur ne supporte pas l'affichage des PDF.{' '}
              <a
                href="https://raw.githubusercontent.com/ceny-sakho/bac-ses/main/public/devoirs/terminale/chapitre1/devoir2.pdf"
                className="text-blue-600 hover:underline"
                download
              >
                Télécharger le PDF
              </a>
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Devoir2;
