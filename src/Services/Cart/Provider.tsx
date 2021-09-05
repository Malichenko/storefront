import React, { ReactElement, useState } from 'react';
import { Context } from 'Services/Cart/Context';
import { Product } from 'Interfaces/ProductInterface';

export const CartProvider: React.FC = ({ children }): ReactElement => {
	const [cart, setCart] = useState<Product[]>([]);
	const updateCart = (value: Product): void => {
		console.log(value);
		setCart((prevState) => prevState);
	};
	const deleteCart = (id: string): void => {
		console.log(id);
		setCart((prevState) => prevState);
	};
	return (
		<Context.Provider value={{ cart, updateCart, deleteCart }}>
			{children}
		</Context.Provider>
	);
};
