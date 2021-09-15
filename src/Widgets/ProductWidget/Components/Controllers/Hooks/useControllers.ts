import React, { useEffect, useState } from 'react';

export const useControllers = (
	num: number,
	updateItemCount: (n: number) => void
): {
	isError: boolean;
	increase: () => void;
	decrease: () => void;
	changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
} => {
	const [isError, setError] = useState<boolean>(false);
	useEffect(() => {
		const value = Number(num);
		if (value <= 0) {
			setError(true);
		} else {
			setError(false);
		}
	}, [num]);

	const increase = (): void => {
		updateItemCount(num + 1);
	};

	const decrease = (): void => {
		updateItemCount(num - 1);
	};

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value = Number(event.target.value);

		if (!isNaN(value)) {
			updateItemCount(value);
		}
	};
	return {
		isError,
		increase,
		decrease,
		changeHandler
	};
};
