import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Substitua a URL pela sua rota de login
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        senha,
      });
      console.log('Login realizado com sucesso:', response.data);
      alert('Login realizado com sucesso!');
      // Redirecionar para a página principal ou dashboard
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('E-mail ou senha incorretos.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-16">
        <div className="bg-white/5 backdrop-filter backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
          <h1 className="text-4xl font-extrabold text-center text-yellow-400 mb-8">Faça Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 transition text-white placeholder-gray-400"
                placeholder="exemplo@email.com"
              />
            </div>
            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-gray-200">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 transition text-white placeholder-gray-400"
                placeholder="Sua senha"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-yellow-400 text-black font-extrabold rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}