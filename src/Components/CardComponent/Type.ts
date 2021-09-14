import { Product } from 'Interfaces/ProductInterface';

export interface Props {
	product: Product;
}

export type UseCartComponent = (product: Product) => {
	redirectHandler: () => void;
	addToCardHandler: () => void;
};
