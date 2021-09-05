// Core
import React, { ReactElement } from 'react';
// Widgets
import UserLayout from 'Layouts/UserLayout/UserLayout';
import { CartProvider } from './Services/Cart/Provider';

export const App: React.FC = (): ReactElement => {
	return (
		<CartProvider>
			<UserLayout />
		</CartProvider>
	);
};
