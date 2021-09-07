// Core
import React, { ReactElement } from 'react';
// Style
import './Style.css';

export const View: React.FC = (): ReactElement => {
	return (
		<div className="banner">
			<div className="banner__wrap">
				<div className="banner__announcement">
					<div className="banner__caption">
						<div className="banner__title">
							<h2>Plates</h2>
						</div>

						<p className="banner__subtitle">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Aliquam est labore maiores molestias optio ratione reiciendis
							sed voluptatem. Ad animi aperiam asperiores delectus deserunt
							inventore numquam voluptatum.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
