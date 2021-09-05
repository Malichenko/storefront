import { Product } from 'Interfaces/ProductInterface';

export interface ContextData {
	cart: Product[];
	updateCart: (value: Product) => void;
	deleteCart: (id: string) => void;
}
