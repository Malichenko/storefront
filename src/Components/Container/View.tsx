// Core
import React, { ReactElement } from 'react';
// Styles
import './Style.css';

export const View: React.FC = ({ children }): ReactElement => {
	return <div className="container">{children}</div>;
};
