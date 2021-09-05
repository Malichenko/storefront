// Core
import React, { ReactElement } from 'react';
import { Router } from 'react-router-dom';
// Other
import { History, Routes } from 'Navigation';
// Styles
import Classes from './UserLayout.module.css';

const UserLayout: React.FC = (): ReactElement => {
	return (
		<div className={Classes.root}>
			<Router history={History}>
				<Routes />
			</Router>
		</div>
	);
};

export default UserLayout;
