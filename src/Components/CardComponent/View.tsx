// Core
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router';
// Utils
import { BOOK } from 'Navigation/Book';
import { useCart } from 'Services/Cart/Context';

// Type
import { Props } from './Type';
// Style
import './Style.css';
export const View: React.FC<Props> = ({ product }): ReactElement => {
	const router = useHistory();
	const redirectHandler = (id: string): void => {
		if (typeof BOOK.product.as === 'function') {
			router.push(BOOK.product.as(id));
		}
	};

	const { updateCart } = useCart();
	const addToCardHandler = (id: string): void => {
		updateCart(id);
	};

	return (
		<div className="card">
			<div className="card__img-box">
				<img className="card__img" src={product.image} alt={product.title} />

				<div className="card__overlay">
					<button
						className="buttons card__details"
						onClick={(): void => redirectHandler(product.id)}
					>
						view details
					</button>
					<button
						className="buttons card__add"
						onClick={(): void => addToCardHandler(product.id)}
					>
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
