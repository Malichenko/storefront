import React from 'react';
import { RenderProps } from './Types';

const Render: React.FC<RenderProps> = ({ if: condition, children }) =>
	condition === true ? <>{children}</> : null;

export default Render;
