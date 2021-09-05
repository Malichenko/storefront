// Core
import React, { ReactElement } from 'react';
import { Router } from 'react-router-dom';
// Navigation
import { History, Routes } from './Navigation';
// Widgets
import { CartProvider } from 'Services/Cart/Provider';

export const App: React.FC = (): ReactElement => {
	return (
		<CartProvider>
			<Router history={History}>
				<Routes />
			</Router>
		</CartProvider>
	);
};
