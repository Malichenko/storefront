// Core
import React, { ReactElement } from 'react';
// Other
// Styles
import Classes from './UserLayout.module.css';
import { HeaderComponent } from '../../Components/HeaderComponent';

const UserLayout: React.FC = ({ children }): ReactElement => {
	return (
		<div className={Classes.root}>
			<HeaderComponent />
			{children}
		</div>
	);
};

export default UserLayout;
