// Core
import React, { ReactElement } from 'react';
import { useLocation } from 'react-router';
// Other
import { BOOK } from '../../Navigation';
// Components
import { HeaderWidget } from 'Widgets/HeaderWidget';
import { Render } from 'Components/Render';
import { BannerComponent } from 'Components/BannerComponent';
// Styles
import Classes from './UserLayout.module.css';

const UserLayout: React.FC = ({ children }): ReactElement => {
	const { pathname } = useLocation();
	const isHomePage = pathname === BOOK.home.url;
	return (
		<div className={Classes.root}>
			<HeaderWidget />

			<Render if={isHomePage}>
				<BannerComponent />
			</Render>

			{children}
		</div>
	);
};

export default UserLayout;
