import React, { ReactElement } from 'react';
import { CategoryWidget } from 'Widgets/CategoryWidget';
import UserLayout from 'Layouts/UserLayout/UserLayout';

export const CategoryPage: React.FC = (): ReactElement => {
	return (
		<UserLayout>
			<CategoryWidget />
		</UserLayout>
	);
};
