export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'food' | 'drinks' | 'other';
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  email: string;
  name: string;
}