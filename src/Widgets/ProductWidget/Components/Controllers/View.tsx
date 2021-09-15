// Core
import React, { ReactElement } from 'react';
import classNames from 'classnames';
//	Components
import { AddToCartButton } from 'Components/AddToCartButton';
//	Type
import { Product } from 'Interfaces/ProductInterface';
// Hooks
import { useControllers } from './Hooks/useControllers';
// Style
import './Style.css';

export const View: React.FC<{ updateItemCount: (n: number) => void; product: Product }> =
	({ updateItemCount, product }): ReactElement => {
		const { isError, increase, decrease, changeHandler } = useControllers(
			product.count,
			updateItemCount
		);

		return (
			<div className="controllers">
				<div className="controllers__counter">
					<div className="controllers__input-box">
						<input
							type="number"
							className={classNames('controllers__input', {
								'controllers__input--error': isError
							})}
							onChange={changeHandler}
							value={product.count}
						/>
						<p
							className={classNames('controllers__error-text', {
								'controllers__error-text--open': isError
							})}
						>
							Value, should be more or equal 1!
						</p>
					</div>

					<div className="controllers__button-box">
						<button className="controllers__button" onClick={increase}>
							+
						</button>
						<button className="controllers__button" onClick={decrease}>
							-
						</button>
					</div>
				</div>

				<AddToCartButton
					disabled={isError}
					cx={'controllers__submit'}
					product={product}
				/>
			</div>
		);
	};
