// Core
import React, { ReactElement } from 'react';
// Components
import { Breadcrumbs } from 'Components/Breadcrumbs';
import { NotFoundPage } from 'Navigation/Pages/404';
import { Divider } from 'Components/Divider';
import { Controllers } from './Components/Controllers';
import { useParams } from 'react-router';
// Hooks
import { useProductWidget } from './Hooks/useProductWidget';
// Utils
import { BOOK } from 'Navigation/Book';
import { UtilServices } from 'Services/Utils';
// Type
import { PlainObject } from 'Interfaces/PlainObject';
// Style
import './Style.css';

export const View: React.FC = (): ReactElement => {
	const params: PlainObject<string> = useParams();
	const { item: product, updateItemCount } = useProductWidget(params.id);

	if (!product) {
		return <NotFoundPage />;
	}

	return (
		<section className="product">
			<Breadcrumbs
				items={[
					{ url: BOOK.home.url, name: BOOK.home.id },
					{ name: product.title }
				]}
			/>

			<div className="product__wrap">
				<div className="product__img-box">
					<img
						src={product.image}
						alt={product.title}
						className="product__img"
					/>
				</div>

				<div className="product__info">
					<div className="product__caption">
						<p className="product__brand">{product.brand}</p>
						<h2 className="product__title">{product.title}</h2>
						<p className="product__price">
							&#65284;{UtilServices.addZeroes(product.price)}
						</p>
						<p className="product__description">{product.description}</p>
					</div>

					<Divider />

					<Controllers product={product} updateItemCount={updateItemCount} />
				</div>
			</div>
		</section>
	);
};
