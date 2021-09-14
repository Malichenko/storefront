import React, { ReactElement } from 'react';
import { Product } from 'Interfaces/ProductInterface';
import { useCart } from 'Services/Cart/Context';

export const View: React.FC<{ cx: string; product: Product }> = ({
	cx,
	product
}): ReactElement => {
	const { updateCart } = useCart();
	const addToCardHandler = (): void => {
		updateCart(product);
	};

	return (
		<button className={cx} onClick={addToCardHandler}>
			add to cart
		</button>
	);
};
