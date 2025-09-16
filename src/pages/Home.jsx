import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); // <- Navegação programática

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
      {/* Hero Section com vídeo de fundo */}
      <section className="relative w-screen h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Vídeo de fundo */}
        <video
          className="absolute top-0 left-0 w-screen h-screen object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/livros.mp4" type="video/mp4" />
        </video>

        {/* Overlay escuro */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

        {/* Conteúdo */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Bem-vindo ao <span className="text-yellow-400">Sebo Online</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Livros com história, preços acessíveis e novas leituras esperando
            por você.
          </p>

          {/* Frase dentro do hero */}
          <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-white">
            O que você gostaria de ler hoje?
          </h2>

          {/* Botão com navegação */}
          <button
            className="mt-6 px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
            onClick={() => navigate("/acervo")}
          >
            Ver Acervo
          </button>
        </div>
      </section>

      {/* Seção dos Cards */}
      <section className="py-16 bg-gradient-to-r from-violet-100 to-pink-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            {
              title: "📚 Acervo",
              desc: "Explore nossa coleção de livros usados em ótimo estado.",
              bg: "bg-violet-700 text-white",
            },
            {
              title: "🤝 Trocas & Doações",
              desc: "Troque ou doe livros e ajude a espalhar conhecimento.",
              bg: "bg-yellow-300 text-black",
            },
            {
              title: "💡 Recomendações",
              desc: "Receba dicas de leitura personalizadas.",
              bg: "bg-pink-300 text-black",
            },
            {
              title: "🎙️ Blog Literário",
              desc: "Artigos e reflexões sobre literatura e cultura.",
              bg: "bg-blue-300 text-black",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`${card.bg} p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300 min-h-[180px] flex flex-col justify-center`}
            >
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção: Apenas Botão de Vender */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="mt-0">
            <h3 className="text-2xl font-semibold mb-4">
              Transforme seus livros em novas histórias
            </h3>
            <button
              className="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition"
              onClick={() => navigate("/vender")}
            >
              Desejo vender um livro
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
