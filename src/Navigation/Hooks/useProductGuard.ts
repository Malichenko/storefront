// Core
import { useEffect } from 'react';
import { useHistory } from 'react-router';
// Utils
import { ApiServices } from 'Services/Api';
import { BOOK } from 'Navigation/Book';

export const useProductGuard = (id: string): void => {
	const router = useHistory();
	useEffect(() => {
		if (ApiServices.getProductById(id) === null) {
			router.push(BOOK['404'].url);
		}
	}, []);
};
