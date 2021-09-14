import { useHistory } from 'react-router';
import { BOOK } from 'Navigation';
import { Product } from 'Interfaces/ProductInterface';
import { UseCartComponent } from '../Type';

export const useCardComponent: UseCartComponent = (product: Product) => {
	const router = useHistory();
	return (): void => {
		if (typeof BOOK.product.as === 'function') {
			router.push(BOOK.product.as(product.id));
		}
	};
};
