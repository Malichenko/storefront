import { render } from 'enzyme';
import React, { ReactElement } from 'react';
import {HeaderComponent} from "Components/HeaderComponent";

export type TestRenderComponent = cheerio.Cheerio;

export function renderComponent(Component: ReactElement): TestRenderComponent {
	return render(
		<HeaderComponent>
			{Component}
		</HeaderComponent>
	);
}
