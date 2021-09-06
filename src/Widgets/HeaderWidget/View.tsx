// Core
import React, { ReactElement } from 'react';
import { useLocation } from 'react-router';
// Nav
import { BOOK } from 'Navigation';
// Components
import { Cart } from 'Widgets/HeaderWidget/Components/Cart';
import { ArrowDown } from 'Components/ArrowDown';
// Style
import './Style.css';

export const View: React.FC = (): ReactElement => {
	const { pathname } = useLocation();
	const isMainPage = pathname === BOOK.home.url;
	const logoJSX = <img src={process.env.PUBLIC_URL + '/media/logo.png'} alt="logo" />;
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo-box">
					{isMainPage ? logoJSX : <a href="/">{logoJSX}</a>}
				</div>

				<nav className="header__nav">
					<ul className="header__nav-list">
						<li className="header__nav-link">home</li>
						<li className="header__nav-link">
							shop <ArrowDown />
						</li>
						<li className="header__nav-link">journal</li>
						<li className="header__nav-link">
							more <ArrowDown />
						</li>
					</ul>
				</nav>

				<div className="header__cart">
					<Cart />
				</div>
			</div>
		</header>
	);
};
