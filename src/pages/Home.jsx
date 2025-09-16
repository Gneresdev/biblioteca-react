// src/pages/Home.jsx

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-700">Biblioteca Online</h1>
        <p className="text-gray-600 mt-2">
          Seu espaço para encontrar livros incríveis
        </p>
      </header>

      <main className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Destaques</h2>
          {/* Aqui vão cards de livros, por exemplo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Livro Exemplo 1</h3>
              <p className="text-gray-700">
                Descrição rápida do livro que pode inspirar o leitor.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Livro Exemplo 2</h3>
              <p className="text-gray-700">
                Descrição rápida do livro que pode inspirar o leitor.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Livro Exemplo 3</h3>
              <p className="text-gray-700">
                Descrição rápida do livro que pode inspirar o leitor.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Procure seu livro</h2>
          <input
            type="text"
            placeholder="Digite o nome do livro..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </section>
      </main>
    </div>
  );
}
