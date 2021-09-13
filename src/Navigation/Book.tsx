// Core
import React from 'react';
// Pages
import { CategoryPage, ProductPage } from './Pages';

type Book = {
	url: string;
	as?: (id: string) => string;
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
		url: '/product/:id',
		as(id: string): string {
			return `/product/${id}`;
		},
		component: ProductPage,
		id: 'product'
	}
};
