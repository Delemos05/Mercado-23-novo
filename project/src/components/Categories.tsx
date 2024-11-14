import React from 'react';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'food', name: 'Alimentos' },
  { id: 'drinks', name: 'Bebidas' },
  { id: 'other', name: 'Outros' },
];

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8 py-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:bg-yellow-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}