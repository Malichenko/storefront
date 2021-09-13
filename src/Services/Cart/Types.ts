import { Product } from 'Interfaces/ProductInterface';
import { PlainObject } from 'Interfaces/PlainObject';

export type Cart = PlainObject<Product>;

export interface ContextData {
	totalGoods: number;
	cart: Cart;
	updateCart: (id: string) => void;
	deleteCart: (id: string) => void;
	totalPrice: number;
}
