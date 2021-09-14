// Core
import React, { ReactElement } from 'react';
// Components
import { Breadcrumbs } from 'Components/Breadcrumbs';
// Hooks
import { useProductWidget } from './Hooks/useProductWidget';
// Utils
import { BOOK } from 'Navigation/Book';
// Style
import './Style.css';

export const View: React.FC = (): ReactElement => {
	const { item } = useProductWidget();

	return (
		<section className="product">
			<Breadcrumbs
				items={[
					{ url: BOOK.home.url, name: BOOK.home.id },
					{ name: String(item?.title) }
				]}
			/>
		</section>
	);
};
