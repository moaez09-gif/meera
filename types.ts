
export interface PriceMap {
  small: number;
  med: number;
  large: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  prices: PriceMap;
  image: string;
  category: 'meat' | 'chicken' | 'veggie' | 'sides' | 'drinks';
  isPopular?: boolean;
  isSpicy?: boolean;
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  selectedSize: 'small' | 'med' | 'large';
  name: string;
  price: number;
  image: string;
}
