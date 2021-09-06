import { render } from 'enzyme';
import React, { ReactElement } from 'react';

export type TestRenderComponent = cheerio.Cheerio;

export function renderComponent(Component: ReactElement): TestRenderComponent {
	return render(<>{Component}</>);
}
