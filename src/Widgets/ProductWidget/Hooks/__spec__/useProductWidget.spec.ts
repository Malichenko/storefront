import { renderHook, act } from '@testing-library/react-hooks';
import { useProductWidget } from '../useProductWidget';

describe('Hook should match specification', () => {
	test('Should increase product item count', () => {
		const { result } = renderHook(() => useProductWidget('2'));

		act(() => {
			result.current.updateItemCount(1);
		});

		expect(result.current.item).toStrictEqual({
			...result.current.item,
			count: 2
		});
	});

	test('Should decrease product item count', () => {
		const { result } = renderHook(() => useProductWidget('2'));

		act(() => {
			result.current.updateItemCount(-1);
		});

		expect(result.current.item).toStrictEqual({
			...result.current.item,
			count: 0
		});
	});

	test('UpdateItemCount should return null in item state, coze item was not found', () => {
		const { result } = renderHook(() => useProductWidget('86867'));

		act(() => {
			result.current.updateItemCount(1);
		});

		expect(result.current.item).toStrictEqual(null);
	});
});
