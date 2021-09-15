import { createContext, useContext } from 'react';
import { ContextData } from './Types';

export const Context = createContext<ContextData>({
	totalGoods: 0,
	cart: {},
	updateCart: (): void => undefined,
	deleteCartItem: (): void => undefined,
	totalPrice: 0
});
export const useCart = (): ContextData => useContext(Context);
