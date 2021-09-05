// Core
import React from 'react';
// Pages
import { CategoryPage, ProductPage } from './Pages';

type Book = {
	url: string;
	component: React.FunctionComponent;
	id: string;
};

export const BOOK: Readonly<{ [key: string]: Book }> = {
	home: {
		url: '/',
		component: CategoryPage,
		id: 'category'
	},
	product: {
		url: '/product',
		component: ProductPage,
		id: 'product'
	}
};
