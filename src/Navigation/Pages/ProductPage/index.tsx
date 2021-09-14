// Core
import React, { ReactElement } from 'react';
// Components
import UserLayout from 'Layouts/UserLayout/UserLayout';
import { ProductWidget } from 'Widgets/ProductWidget';
// Hooks
import { useProductGuard } from 'Navigation/Hooks/useProductGuard';
import { PlainObject } from 'Interfaces/PlainObject';
import { useParams } from 'react-router';

export const ProductPage: React.FC = (): ReactElement => {
	const params: PlainObject<string> = useParams();
	useProductGuard(params.id);
	return (
		<UserLayout>
			<ProductWidget />
		</UserLayout>
	);
};
