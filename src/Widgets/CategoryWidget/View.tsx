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
			<div className="category__wrap">
				{products.map((el, idx) => (
					<div className="category__item" key={`${el.title}:${idx}`}>
						<CardComponent product={el} />
					</div>
				))}
			</div>
		</article>
	);
};
