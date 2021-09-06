// Core
import React, { ReactElement } from 'react';
// Cart
import { useCart } from 'Services/Cart/Context';
// Components
import { ArrowDown } from 'Components/ArrowDown';
// Style
import './Style.css';

export const View: React.FC = (): ReactElement => {
	const { cart } = useCart();
	return (
		<section className="cart">
			<a href="/" className="cart__link">
				my cart ({cart.length}) <ArrowDown />
			</a>
		</section>
	);
};
