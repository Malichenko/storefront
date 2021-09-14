// Core
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
// Style
import './Style.css';
import { BOOK } from 'Navigation/Book';

export const View: React.FC = (): ReactElement => {
	return (
		<main className="root">
			<section className="inner">
				<h1 className="title">404</h1>
				<p className="description">Page not found!</p>

				<div className="link-box">
					<Link to={BOOK.home.url} className="link-back">
						👈&nbsp;Back to home page
					</Link>
				</div>
			</section>
		</main>
	);
};
