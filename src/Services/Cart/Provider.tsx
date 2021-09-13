import React, { ReactElement, useEffect, useState } from 'react';
import { Context } from 'Services/Cart/Context';
import { Cart } from 'Services/Cart/Types';
import { ApiServices } from 'Services/Api';

export const CartProvider: React.FC = ({ children }): ReactElement => {
	const [totalGoods, setTotalGoods] = useState<number>(0);
	const [cart, setCart] = useState<Cart>({});
	const [totalPrice, setTotalPrice] = useState<number>(0);

	useEffect(() => {
		setTotalPrice(() => {
			return Object.values(cart).reduce<number>((acc, el) => {
				if (el.price) {
					acc += el.price;
				}
				return acc;
			}, 0);
		});
	}, [cart]);

	const updateCart = (id: string): void => {
		const currentProduct = ApiServices.getProductById(id);

		if (currentProduct) {
			if (Object.prototype.hasOwnProperty.call(cart, id)) {
				setCart((prevState) => ({
					...prevState,
					[id]: {
						...prevState[id],
						price: prevState[id].price + currentProduct.price,
						count: prevState[id].count + 1
					}
				}));
			} else {
				setCart((prevState) => ({
					...prevState,
					[id]: {
						...currentProduct,
						count: +1
					}
				}));
			}

			setTotalGoods((prevState) => prevState + 1);
		}
	};

	const deleteCart = (id: string): void => {
		setCart((prevState) => {
			setTotalGoods((prev) => prev - prevState[id].count);
			const _newState: Cart = JSON.parse(JSON.stringify(prevState));
			if (Object.prototype.hasOwnProperty.call(_newState, id)) {
				delete _newState[id];
			}
			return _newState;
		});
	};
	return (
		<Context.Provider
			value={{ totalGoods, cart, totalPrice, updateCart, deleteCart }}
		>
			{children}
		</Context.Provider>
	);
};
