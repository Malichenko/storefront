import { ApiServices, Product } from 'Services/Api';

export const useCategory = (): Product[] => {
	return ApiServices.getAllProducts();
};
