import { createContext, useContext } from 'react';
import { ContextData } from './Types';

export const Context = createContext<ContextData>({
	totalGoods: 0,
	cart: {},
	updateCart: (): void => undefined,
	deleteCart: (): void => undefined
});
export const useCart = (): ContextData => useContext(Context);
