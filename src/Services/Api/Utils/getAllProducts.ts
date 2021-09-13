import { PRODUCT } from 'Services/Api/Constants';
import { Product } from 'Interfaces/ProductInterface';

export function getAllProducts(): Product[] {
	return PRODUCT;
}
