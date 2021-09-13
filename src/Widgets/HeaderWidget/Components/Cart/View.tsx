// Core
import React, { ReactElement } from 'react';
import classNames from 'classnames';
// Cart
import { useCart } from 'Services/Cart/Context';
// Components
import { ArrowDown } from 'Components/ArrowDown';
import { Divider } from 'Components/Divider';
import { Render } from 'Components/Render';
// Hooks
import { useCartLogics } from './Hooks/useCartLogics';
// Style
import './Style.css';

function addZeroes(num: string): string {
	const dec = num.split('.')[1];
	const len = dec && dec.length > 2 ? dec.length : 2;
	return Number(num).toFixed(len);
}

export const View: React.FC = (): ReactElement => {
	const { totalGoods, cart, totalPrice, deleteCart } = useCart();
	const { wrapperRef, open, toggleCart } = useCartLogics();
	const isCartEmpty = totalGoods <= 0;

	return (
		<section className="cart" ref={wrapperRef}>
			<div className="cart__indicator-box">
				<button
					className={classNames('cart__indicator', {
						'cart__indicator--open': open
					})}
					onClick={toggleCart}
				>
					my cart ({totalGoods})
				</button>
				<ArrowDown />
			</div>

			<div
				className={classNames('cart__window', {
					'cart__window--open': open
				})}
			>
				<Render if={!isCartEmpty}>
					<div className="cart__content">
						{Object.values(cart).map((el, idx) => (
							<div className="cart__item" key={`${el.title}:${idx}`}>
								<div className="cart__img-box">
									<img
										className="cart__img"
										src={el.image}
										alt={el.title}
									/>
								</div>

								<div className="cart__item-caption">
									<h6 className="cart__item-title">
										{el.title}
										<span className="cart__item-count">
											&nbsp;&#215;&nbsp;
											{el.count}
										</span>
									</h6>
									<span className="cart__item-brand">{el.brand}</span>
									<p className="cart__item-price">
										&#65284;{addZeroes(String(el.price))}
									</p>
								</div>

								<button
									className="cart__item-dell"
									onClick={(): void => deleteCart(el.id)}
								/>
							</div>
						))}

						<Divider />

						<div className="cart__total">
							<span>total</span>
							<span>&#65284;{addZeroes(String(totalPrice))}</span>
						</div>
					</div>
				</Render>

				<Render if={isCartEmpty}>
					<p className="cart__empty">Cart is Empty!</p>
					<Divider />
				</Render>

				<div className="cart__button-box">
					<button
						disabled={isCartEmpty}
						className="cart__button cart__button--white"
					>
						view cart
					</button>
					<button
						disabled={isCartEmpty}
						className="cart__button cart__button--black"
					>
						checkout
					</button>
				</div>
			</div>
		</section>
	);
};
