import { Product } from 'Services/Api';
import { PRODUCT } from 'Services/Api/Constants';

export function getProductById(id: string): Product | null {
	return PRODUCT.find((el) => el.id === id) ?? null;
}
