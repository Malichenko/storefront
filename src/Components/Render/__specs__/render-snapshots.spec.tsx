import React from 'react';
import { Render, RenderProps } from '../index';
import { TestRenderComponent, TestsService } from 'Services/Tests';

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
