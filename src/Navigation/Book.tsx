// Core
import React from 'react';
// Pages
import { CategoryPage, ProductPage } from './Pages';
import { NotFoundPage } from "Navigation/Pages/404";

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
	},
  '404': {
		url: '/404',
		component: NotFoundPage,
		id: '404'
  }
};
