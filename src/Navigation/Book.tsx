// Core
import React from 'react';
// Pages
import { CategoryWidget } from '../Widgets/CategoryWidget';
import { ProductWidget } from '../Widgets/ProductWidget';

type Book = {
	url: string;
	component: React.FunctionComponent;
	id: string;
};

export const BOOK: Readonly<{ [key: string]: Book }> = {
	home: {
		url: '/',
		component: CategoryWidget,
		id: 'category'
	},
	product: {
		url: '/product',
		component: ProductWidget,
		id: 'product'
	}
};
