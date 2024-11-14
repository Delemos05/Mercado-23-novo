import React from 'react';
import { Search, Home, Info, Phone, User, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenAuth: () => void;
}

export function Navbar({ onOpenCart, onOpenAuth }: NavbarProps) {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 flex items-center">
              <img src="logo.png" alt="Descrição da imagem" className="w-16 h-auto ml-4" />
              <span className="ml-2 text-xl font-bold text-gray-800">23 Horas</span>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-96 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <NavLink icon={<Home size={20} />} text="Home" />
            <NavLink icon={<Info size={20} />} text="Sobre" />
            <NavLink icon={<Phone size={20} />} text="Contato" />

            <button
              onClick={onOpenAuth}
              className="flex items-center text-gray-700 hover:text-red-600"
            >
              <User size={20} />
              <span className="ml-1">{user ? user.name : 'Entrar'}</span>
            </button>

            <button
              onClick={onOpenCart}
              className="flex items-center text-gray-700 hover:text-red-600"
            >
              <ShoppingCart size={20} />
              <span className="ml-1">Carrinho</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a
      href="#"
      className="flex items-center text-gray-700 hover:text-red-600"
    >
      {icon}
      <span className="ml-1">{text}</span>
    </a>
  );
}