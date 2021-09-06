import React, { ReactElement } from 'react';
import { RenderProps } from './Types';

const Render: React.FC<RenderProps> = ({
	if: condition,
	children
}): ReactElement | null => (condition === true ? <>{children}</> : null);

export default Render;
