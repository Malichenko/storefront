import { PRODUCT } from 'Services/Api/Constants';
import { Product } from 'Interfaces/ProductInterface';

export function getProductById(id: string): Product | null {
	return PRODUCT.find((el) => el.id === id) ?? null;
}
