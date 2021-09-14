import { useEffect, useState } from 'react';
import { Cart, UseCartProvider } from 'Services/Cart/Types';
import { ApiServices } from 'Services/Api';
import { Product } from 'Interfaces/ProductInterface';

export const useCartProvider: UseCartProvider = () => {
	const [totalGoods, setTotalGoods] = useState<number>(0);
	const [cart, setCart] = useState<Cart>({});
	const [totalPrice, setTotalPrice] = useState<number>(0);

	useEffect(() => {
		setTotalPrice(() => {
			return Object.values(cart).reduce<number>((acc, el) => acc + el.price, 0);
		});

		setTotalGoods(() => {
			return Object.values(cart).reduce<number>((acc, el) => acc + el.count, 0);
		});
	}, [cart]);

	const updateCart = (newItem: Product): void => {
		const _id = newItem.id;
		if (Object.prototype.hasOwnProperty.call(cart, _id)) {
			setCart((prevState) => ({
				...prevState,
				[_id]: {
					...prevState[_id],
					price: prevState[_id].price + newItem.price,
					count: prevState[_id].count + newItem.count
				}
			}));
		} else {
			setCart((prevState) => ({
				...prevState,
				[_id]: newItem
			}));
		}
	};

	const getCartItemById = (id: string): Product | null => {
		if (Object.prototype.hasOwnProperty.call(cart, id)) {
			return cart[id];
		}

		return ApiServices.getProductById(id) || null;
	};

	const deleteCartItem = (id: string): void => {
		setCart((prevState) => {
			const _newState: Cart = JSON.parse(JSON.stringify(prevState));
			if (Object.prototype.hasOwnProperty.call(_newState, id)) {
				delete _newState[id];
			}
			return _newState;
		});
	};

	return {
		totalGoods,
		cart,
		totalPrice,
		updateCart,
		getCartItemById,
		deleteCartItem
	};
};
