import { useHistory } from 'react-router';
import { BOOK } from 'Navigation';
import { useCart } from 'Services/Cart/Context';
import { Product } from 'Interfaces/ProductInterface';
import { UseCartComponent } from '../Type';

export const useCardComponent: UseCartComponent = (product: Product) => {
	const router = useHistory();
	const redirectHandler = (): void => {
		if (typeof BOOK.product.as === 'function') {
			router.push(BOOK.product.as(product.id));
		}
	};

	const { updateCart } = useCart();
	const addToCardHandler = (): void => {
		updateCart(product);
	};

	return {
		redirectHandler,
		addToCardHandler
	};
};
