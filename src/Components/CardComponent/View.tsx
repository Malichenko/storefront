// Core
import React, { ReactElement } from 'react';
// Type
import { Props } from './Type';
// Style
import './Style.css';

export const View: React.FC<Props> = ({ product }): ReactElement => {
	return (
		<div className="card">
			<img src={product.image} alt={product.title} />
		</div>
	);
};
