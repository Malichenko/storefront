import { useParams } from 'react-router';
import { PlainObject } from 'Interfaces/PlainObject';
import { useState } from 'react';
import { useCart } from 'Services/Cart/Context';
import { Product } from 'Interfaces/ProductInterface';

export const useProductWidget = (): {
	item: Product | null;
	updateItemCount: (n: number) => void;
} => {
	const params: PlainObject<string> = useParams();
	const { getCartItemById } = useCart();
	const [item, setItem] = useState<Product | null>(getCartItemById(params.id));
	const updateItemCount = (n: number): void => {
		if (item) {
			setItem((prevState) => {
				if (prevState) {
					return {
						...prevState,
						count: prevState.count + n
					};
				}

				return null;
			});
		}
	};

	return {
		item,
		updateItemCount
	};
};
