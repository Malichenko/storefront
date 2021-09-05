import React, { ReactElement } from 'react';
import UserLayout from 'Layouts/UserLayout/UserLayout';
import { ProductWidget } from 'Widgets/ProductWidget';

export const ProductPage: React.FC = (): ReactElement => {
	return (
		<UserLayout>
			<ProductWidget />
		</UserLayout>
	);
};
