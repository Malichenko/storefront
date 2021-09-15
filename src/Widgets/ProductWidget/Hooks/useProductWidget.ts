import { useState } from 'react';
import { Product } from 'Interfaces/ProductInterface';
import { ApiServices } from 'Services/Api';

export const useProductWidget = (
	id: string
): {
	item: Product | null;
	updateItemCount: (n: number) => void;
} => {
	const [item, setItem] = useState<Product | null>(ApiServices.getProductById(id));
	const updateItemCount = (n: number): void => {
		if (item) {
			setItem((prevState) => {
				if (prevState) {
					return {
						...prevState,
						count: n
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
