// Core
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
// Style
import './Style.css';

type BreadcrumbItem = {
	name: string;
	url?: string;
};

export const View: React.FC<{ items: BreadcrumbItem[] }> = ({ items }): ReactElement => {
	return (
		<ul className="breadcrumbs">
			{items.map((el, idx) => (
				<li className="breadcrumbs__item" key={`${el.name}:${idx}`}>
					{el.url ? (
						<Link className="breadcrumbs__link" to={el.url}>
							{el.name}
						</Link>
					) : (
						<span className="breadcrumbs__text">{el.name}</span>
					)}
				</li>
			))}
		</ul>
	);
};
