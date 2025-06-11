export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smartphone Galaxy",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    description: "Smartphone de última generación con cámara profesional",
    category: "Electrónicos"
  },
  {
    id: 2,
    name: "Laptop Pro",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    description: "Laptop profesional para trabajo y gaming",
    category: "Electrónicos"
  },
  {
    id: 3,
    name: "Auriculares Wireless",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Auriculares inalámbricos con cancelación de ruido",
    category: "Audio"
  },
  {
    id: 4,
    name: "Reloj Inteligente",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Reloj inteligente con monitor de salud",
    category: "Wearables"
  },
  {
    id: 5,
    name: "Cámara Digital",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    description: "Cámara digital profesional 4K",
    category: "Fotografía"
  },
  {
    id: 6,
    name: "Tablet Ultra",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    description: "Tablet de alta resolución para creativos",
    category: "Electrónicos"
  }
]; 