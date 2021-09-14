// Core
import React, { ReactElement } from 'react';
// Stye
import './Style.css';

export const View: React.FC<{ updateItemCount: (n: number) => void }> = ({
	updateItemCount
}): ReactElement => {
	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
		console.log(event);
	};

	return (
		<div className="controllers">
			<div className="controllers_counter">
				<input type="number" onChange={changeHandler} />
				<button>+</button>
				<button>-</button>
			</div>

			<button className="controllers_submit">add to cart</button>
		</div>
	);
};
