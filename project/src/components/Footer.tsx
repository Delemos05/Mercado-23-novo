import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  CreditCard,
  Banknote,
  QrCode,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-3 py-2 bg-blue-800 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-blue-800 rounded-md"
              />
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full px-3 py-2 bg-blue-800 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
              >
                Enviar
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Missão e Valores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Política de Devolução
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="hover:text-yellow-500">
                <Facebook />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <Instagram />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <Twitter />
              </a>
            </div>

            <h3 className="text-lg font-semibold mb-4">Formas de Pagamento</h3>
            <div className="flex space-x-4">
              <QrCode className="text-gray-400" />
              <CreditCard className="text-gray-400" />
              <Banknote className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-gray-400">
          <p>&copy; 2024 Mercado 23 Horas, criado por Marcolino Lemos, todos direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}