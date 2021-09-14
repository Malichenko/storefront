import { useParams } from 'react-router';
import { PlainObject } from 'Interfaces/PlainObject';
import { useState } from 'react';
import { useCart } from 'Services/Cart/Context';
import { Product } from 'Interfaces/ProductInterface';

export const useProductWidget = (): string => {
	const params: PlainObject<string> = useParams();
	const { getCartItemById } = useCart();
	const [item, setItem] = useState<Product | null>(getCartItemById(params.id));
	console.log(setItem);
	console.log(item);
	return '';
};
