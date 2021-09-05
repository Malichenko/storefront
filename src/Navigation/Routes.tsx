// Core
import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
// Book
import { BOOK } from './Book';

export const Routes: React.FC = (): ReactElement => {
	const routesTSX = Object.values(BOOK).map(({ url, component: Page, id }) => (
		<Route key={id} exact path={url}>
			<Page />
		</Route>
	));
	return <Switch>{routesTSX}</Switch>;
};
