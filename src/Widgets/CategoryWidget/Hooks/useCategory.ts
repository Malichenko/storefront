import { ApiServices } from 'Services/Api';
import { Product } from 'Interfaces/ProductInterface';

export const useCategory = (): Product[] => {
	return ApiServices.getAllProducts();
};
