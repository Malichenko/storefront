import { useEffect, useState } from 'react';

export const useControllers = (
	num: number,
	updateItemCount: (n: number) => void
): { isError: boolean; increase: () => void; decrease: () => void } => {
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
		updateItemCount(1);
	};

	const decrease = (): void => {
		updateItemCount(-1);
	};
	return {
		isError,
		increase,
		decrease
	};
};
