import { act, renderHook } from '@testing-library/react-hooks';
import { useControllers } from '../useControllers';

describe('Hook should match specification', () => {
	test('Should make error state truthy', () => {
		const mockFn = jest.fn(() => undefined);
		const { result } = renderHook(() => useControllers(0, mockFn));
		expect(result.current.isError).toBeTruthy();
	});

	test('Should make error state falsy', () => {
		const mockFn = jest.fn(() => undefined);
		const { result } = renderHook(() => useControllers(1, mockFn));
		expect(result.current.isError).toBeFalsy();
	});

	test('Should call updateItemCount fn', () => {
		const mockFn = jest.fn(() => undefined);
		const { result } = renderHook(() => useControllers(1, mockFn));
		act(() => {
			result.current.increase();
		});
		expect(mockFn).toHaveBeenCalledTimes(1);

		act(() => {
			result.current.decrease();
		});

		expect(mockFn).toHaveBeenCalledTimes(2);

		const event: any = {
			target: { value: '12' }
		};

		act(() => {
			result.current.changeHandler(event);
		});

		expect(mockFn).toHaveBeenCalledTimes(3);
	});
});
