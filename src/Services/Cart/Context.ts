import { createContext, useContext } from 'react';
import { ContextData } from './Types';

export const Context = createContext<ContextData>({
	cart: [],
	updateCart: (): void => undefined,
	deleteCart: (): void => undefined
});
export const useCheckoutContext = (): ContextData => useContext(Context);
