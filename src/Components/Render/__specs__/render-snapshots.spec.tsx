import React from 'react';
import { TestRenderComponent, TestsService } from 'Services/Tests';
import { Render, RenderProps } from '../index';

const renderComponent = (props: RenderProps): TestRenderComponent =>
	TestsService.renderComponent(
		<Render {...props}>
			<div>Lorem ipsum dolor sit amet.</div>
		</Render>
	);

describe('<Render />', () => {
	test('Should render children', () => {
		const component = renderComponent({ if: true });
		expect(component).toMatchSnapshot();
	});
	test('Should NOT render children', () => {
		const component = renderComponent({ if: false });
		expect(component).toMatchSnapshot();
	});
});
