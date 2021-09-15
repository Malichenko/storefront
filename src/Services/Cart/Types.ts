import { Product } from 'Interfaces/ProductInterface';
import { PlainObject } from 'Interfaces/PlainObject';

export type Cart = PlainObject<Product>;

export interface ContextData {
	totalGoods: number;
	cart: Cart;
	updateCart: (newItem: Product) => void;
	deleteCartItem: (id: string) => void;
	totalPrice: number;
}

export type UseCartProvider = () => ContextData;
