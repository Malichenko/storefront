import React, { ReactElement } from 'react';
import { Product } from 'Interfaces/ProductInterface';
import { useCart } from 'Services/Cart/Context';

export const View: React.FC<{ disabled?: boolean; cx: string; product: Product }> = ({
	disabled,
	cx,
	product
}): ReactElement => {
	const { updateCart } = useCart();
	const addToCardHandler = (): void => {
		updateCart(product);
	};

	return (
		<button disabled={disabled} className={cx} onClick={addToCardHandler}>
			add to cart
		</button>
	);
};
