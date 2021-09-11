import React, { ReactElement, useState } from 'react';
import { Context } from 'Services/Cart/Context';
import { Cart } from 'Services/Cart/Types';
import { ApiServices } from 'Services/Api';

export const CartProvider: React.FC = ({ children }): ReactElement => {
	const [totalGoods, setTotalGoods] = useState(0);
	const [cart, setCart] = useState<Cart>({});

	const updateCart = (id: string): void => {
		const currentProduct = ApiServices.getProductById(id);
		if (currentProduct) {
			if (Object.prototype.hasOwnProperty.call(cart, id)) {
				setCart((prevState) => ({
					...prevState,
					[id]: {
						...prevState[id],
						price: prevState[id].price + currentProduct.price
					}
				}));
			} else {
				setCart((prevState) => ({
					...prevState,
					[id]: currentProduct
				}));
			}
			setTotalGoods((prevState) => prevState + 1);
		}
	};

	const deleteCart = (id: string): void => {
		setCart((prevState) => {
			if (Object.prototype.hasOwnProperty.call(prevState, id)) {
				delete prevState[id];
			}
			return prevState;
		});
	};
	return (
		<Context.Provider value={{ totalGoods, cart, updateCart, deleteCart }}>
			{children}
		</Context.Provider>
	);
};
