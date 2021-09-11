// Core
import React, { ReactElement } from 'react';
// Components
import { CardComponent } from 'Components/CardComponent';
// Hooks
import { useCategory } from './Hooks/useCategory';
// Styles
import './Style.css';

export const View: React.FC = (): ReactElement => {
	const products = useCategory();
	return (
		<article className="category">
			<div className="category__inner">
				{products.map((el, idx) => (
					<CardComponent key={`${el.title}:${idx}`} product={el} />
				))}
			</div>
		</article>
	);
};
