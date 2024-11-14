import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const products: Product[] = [
  {
    id: 0,
    name: "Arroz Tio João",
    price: 250.0,
    description: "Arroz com frango e legumes",
    image: "https://th.bing.com/th/id/OIP.RmoCpy6UcIa5nauCcV1rRQHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7",
    category: "food"
  },
  {
    id: 1,
    name: 'Maçã Orgânica',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    category: 'food',
    description: 'Maçãs orgânicas frescas'
  },
  {
    id: 1,
    name: "Feijão Carioca",
    price: 180.0,
    description: "Feijão carioca rico em fibras",
    image: "https://th.bing.com/th?q=Feij%c3%a3o+Gr%c3%a3o+Dama+Carioca&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-pt&adlt=strict&t=1&mw=247",
    category: "food"
  },
  {
    id: 2,
    name: 'Suco Natural',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423',
    category: 'drinks',
    description: 'Suco 100% natural'
  },
  {
    id: 2,
    name: "Macarrão Espaguete",
    price: 120.0,
    description: "Macarrão espaguete tradicional",
    image: "https://th.bing.com/th/id/OIP.mhk5dvXTkyIlkrIfYUoZXQHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7",
    category: "food"
  },
  {
    id: 3,
    name: "Farinha de Trigo Dona Benta",
    price: 110.0,
    description: "Farinha de trigo para bolos e pães",
    image: "https://th.bing.com/th/id/OIP.g-l5vNyNxSynX-5_NfktxQHaL5?w=122&h=196&c=7&r=0&o=5&pid=1.7",
    category: "food"
  },
  {
    id: 4,
    name: "Óleo de Soja Soya",
    price: 80.0,
    description: "Óleo de soja para frituras e cozimentos",
    image: "https://th.bing.com/th/id/OIP.4zW9C2gHIAQ_Ae3ocE7_VAHaHa?w=164&h=180&c=7&r=0&o=5&pid=1.7",
    category: "food"
  },
  {
    id: 5,
    name: "Refrigerante Coca-Cola",
    price: 350.0,
    description: "Refrigerante sabor cola 2L",
    image: "https://th.bing.com/th/id/OIP.g_0t4zsnpSOQuIM6f0UUCwHaHa?w=220&h=206&c=7&r=0&o=5&pid=1.7",
    category: "drinks"
  },
  {
    id: 7,
    name: "Água Mineral Bonafont",
    price: 100.0,
    description: "Água mineral sem gás 500ml",
    image: "https://th.bing.com/th/id/OIP.8xGMeQmjWGip2n9eLy2S8wHaHa?w=162&h=180&c=7&r=0&o=5&pid=1.7",
    category: "drinks"
  },
  {
    id: 8,
    name: "Cerveja Skol",
    price: 300.0,
    description: "Cerveja Pilsen lata 350ml",
    image: "https://th.bing.com/th/id/OIP.r_EutZZcWyecv30pCvXBHAHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7",
    category: "drinks"
  },
  {
    id: 9,
    name: "Vinho Tinto Miolo",
    price: 800.0,
    description: "Vinho tinto seco Miolo 750ml",
    image: "https://th.bing.com/th/id/OIP.Hjj4r_2KVvTt8ZGOZgM9NQHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7",
    category: "drinks"
  },
  {
    id: 20,
    name: "Batata Frita Ruffles",
    price: 150.0,
    description: "Batata frita sabor churrasco 120g",
    image: "https://th.bing.com/th/id/OIP.x5LrR6u25hnRhc8qaaUCQwHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7",
    category: "food"
  },
  {
    id: 21,
    name: "Café Pilão",
    price: 400.0,
    description: "Café moído extra forte 500g",
    image: "https://th.bing.com/th/id/OIP.EhVbP8gK21m5Mb2nsdU9yQHaG4?w=204&h=189&c=7&r=0&o=5&pid=1.7",
    category: "drinks"
  },
  {
    id: 22,
    name: "Leite Condensado Moça",
    price: 350.0,
    description: "Leite condensado 395g",
    image: "https://th.bing.com/th/id/OIP.KF71cPwZnmuE3tLEC15qNQAAAA?w=202&h=202&c=7&r=0&o=5&pid=1.7",
    category: "food"
  },
  {
    id: 23,
    name: "Nescau 2.0",
    price: 380.0,
    description: "Achocolatado em pó 400g",
    image: "https://th.bing.com/th/id/OIP.W6M1WV7cPZTtg5cEomaS8AAAAA?w=188&h=188&c=7&r=0&o=5&pid=1.7",
    category: "drinks"
  },
  {
    id: 26,
    name: "Queijo Mussarela",
    price: 600.0,
    description: "Queijo mussarela fatiado 500g",
    image: "https://th.bing.com/th/id/OIP.N7umUbSJ5fvbzDAc9p5biQHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7",
    category: "food"
  },
  {
    id: 28,
    name: "Cereal Nesfit",
    price: 400.0,
    description: "Cereal integral sabor mel 300g",
    image: "https://th.bing.com/th/id/OIP.vedbFjpd6VTFON_YqBGKigHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7",
    category: "food"
  },
  
  {
    id: 30,
    name: "Café Espresso 3 Corações",
    price: 450.0,
    description: "Cápsulas de café espresso compatíveis com Nespresso",
    image: "https://th.bing.com/th/id/OIP.cW79wmDF8jaqafeZ6NJiOQHaHs?w=186&h=193&c=7&r=0&o=5&pid=1.7",
    category: "drinks"
  },
  {
    id: 31,
    name: "Red Bull Energy Drink",
    price: 500.0,
    description: "Bebida energética lata 250ml",
    image: "https://th.bing.com/th/id/OIP.yV7A3hU9v0rywJJF-w30QgHaHa?w=206&h=206&c=7&r=0&o=5&pid=1.7",
    category: "drinks"
  }
];



interface ProductGridProps {
  category: string;
}

export function ProductGrid({ category }: ProductGridProps) {
  const { items, addToCart, updateQuantity } = useCart();
  
  const filteredProducts = category === 'all'
    ? products
    : products.filter((product) => product.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {filteredProducts.map((product) => {
        const cartItem = items.find((item) => item.id === product.id);
        
        return (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <p className="text-red-600 font-bold mt-2">
                R$ {product.price.toFixed(2)}
              </p>
              
              {cartItem ? (
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                    className="p-2 text-gray-600 hover:text-red-600"
                  >
                    <Minus size={20} />
                  </button>
                  
                  <span className="font-semibold">{cartItem.quantity}</span>
                  
                  <button
                    onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                    className="p-2 text-gray-600 hover:text-red-600"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Adicionar ao Carrinho
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}