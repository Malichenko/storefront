// Core
import React, { ReactElement } from 'react';
import { useLocation } from 'react-router';
// Other
import { BOOK } from 'Navigation';
// Components
import { Container } from 'Components/Container';
import { HeaderWidget } from 'Widgets/HeaderWidget';
import { Render } from 'Components/Render';
import { BannerComponent } from 'Components/BannerComponent';
// Styles
import './Style.css';

const UserLayout: React.FC = ({ children }): ReactElement => {
	const { pathname } = useLocation();
	const isHomePage = pathname === BOOK.home.url;
	return (
		<div>
			<HeaderWidget />

			<Render if={isHomePage}>
				<BannerComponent />
			</Render>

			<Container>{children}</Container>
		</div>
	);
};

export default UserLayout;
