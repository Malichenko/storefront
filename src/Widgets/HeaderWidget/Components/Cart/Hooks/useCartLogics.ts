import { MutableRefObject, useEffect, useRef, useState } from 'react';

export const useCartLogics = (): {
	wrapperRef: MutableRefObject<HTMLDivElement | null>;
	toggleCart: () => void;
	open: boolean;
} => {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const [open, setOpen] = useState(false);
	const toggleCart = (): void => setOpen((prevState) => !prevState);

	useEffect(() => {
		const handleClickOutside = (event: Event): void => {
			const target = event.target;
			if (target instanceof HTMLElement) {
				if (wrapperRef.current && !wrapperRef.current.contains(target)) {
					setOpen(false);
				}
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return (): void => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef]);

	return {
		wrapperRef,
		open,
		toggleCart
	};
};
