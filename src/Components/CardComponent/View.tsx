// Core
import React, { ReactElement } from 'react';
// Type
import { Props } from './Type';
// Hooks
import { useCardComponent } from './Hooks/useCardComponent';
// Style
import './Style.css';

export const View: React.FC<Props> = ({ product }): ReactElement => {
	const { redirectHandler, addToCardHandler } = useCardComponent(product);

	return (
		<div className="card">
			<div className="card__img-box">
				<img className="card__img" src={product.image} alt={product.title} />

				<div className="card__overlay">
					<button className="buttons card__details" onClick={redirectHandler}>
						view details
					</button>
					<button className="buttons card__add" onClick={addToCardHandler}>
						add to cart
					</button>
				</div>
			</div>

			<div className="card__info">
				<p className="card__brand card__info--grey">{product.brand}</p>
				<p className="card__title">{product.title}</p>
				<p className="card__info--grey">&#65284;{product.price}</p>
			</div>
		</div>
	);
};
