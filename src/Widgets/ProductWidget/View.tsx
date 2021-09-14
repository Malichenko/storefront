// Core
import React, { ReactElement } from 'react';
// Hooks
import { useProductWidget } from './Hooks/useProductWidget';
// Style
import './Style.css';

export const View: React.FC = (): ReactElement => {
	useProductWidget();
	return <div>ProductWidget</div>;
};
