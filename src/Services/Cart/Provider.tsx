import React, { ReactElement } from 'react';
import { Context } from 'Services/Cart/Context';
import { useCartProvider } from 'Services/Cart/Hooks/useCartProvider';

export const CartProvider: React.FC = ({ children }): ReactElement => {
	const { totalGoods, cart, totalPrice, updateCart, deleteCartItem } =
		useCartProvider();
	return (
		<Context.Provider
			value={{
				totalGoods,
				cart,
				totalPrice,
				updateCart,
				deleteCartItem
			}}
		>
			{children}
		</Context.Provider>
	);
};
