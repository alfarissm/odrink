export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
  category: 'Coffee' | 'Tea' | 'Juice' | 'Smoothie';
  flavorProfile: 'Sweet' | 'Sour' | 'Bitter' | 'Fruity' | 'Earthy';
  dietary: 'Vegan' | 'Gluten-Free' | 'Sugar-Free' | 'None';
  origin: string;
  tastingNotes: string[];
  brewingInstructions: string;
  stock: number;
  status: 'Active' | 'Archived';
}

export interface CartItem {
  product: Product;
  quantity: number;
}
