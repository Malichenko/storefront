import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import { useCartProvider } from '../useCartProvider';
import { Product } from 'Interfaces/ProductInterface';

const productItem: Product = {
	id: '1',
	title: 'Blue Stripe Stoneware Plate',
	brand: 'Kiriko',
	price: 40,
	count: 1,
	description: 'Lorem ipsum dolor sit amet.',
	image: `/blue-stripe-stoneware-plate.jpg`
};

const productItemTwo: Product = {
	id: '1',
	title: 'Blue Stripe Stoneware Plate',
	brand: 'Kiriko',
	price: 40,
	count: 2,
	description: 'Lorem ipsum dolor sit amet.',
	image: `/blue-stripe-stoneware-plate.jpg`
};

const productItemThree: Product = {
	id: '2',
	title: 'Hand Painted Blue Flat Dish',
	brand: 'Kiriko',
	price: 28,
	count: 4,
	description: 'Lorem ipsum dolor sit amet.',
	image: `/hand-painted-blue-flat-dish.jpg`
};

describe('Hook should match specification', () => {
	afterEach(cleanup);

	test('Should add new item in cart state', () => {
		const { result } = renderHook(useCartProvider);
		act(() => {
			result.current.updateCart(productItem);
		});

		expect(result.current.cart).toStrictEqual({ [productItem.id]: productItem });
	});

	test('Should update predefined item in cart state', () => {
		const { result } = renderHook(useCartProvider);

		act(() => {
			result.current.updateCart(productItem);
		});

		act(() => {
			result.current.updateCart(productItemTwo);
		});

		expect(result.current.cart).toStrictEqual({
			[productItem.id]: {
				...productItem,
				count: productItem.count + productItemTwo.count,
				price: productItem.price + productItemTwo.count * productItemTwo.price
			}
		});
	});

	test('Should delete predefined item in cart state', () => {
		const { result } = renderHook(useCartProvider);

		act(() => {
			result.current.updateCart(productItem);
		});

		act(() => {
			result.current.updateCart(productItemThree);
		});

		act(() => {
			result.current.deleteCartItem(productItemThree.id);
		});

		expect(result.current.cart).toStrictEqual({
			[productItem.id]: productItem
		});
	});

	test('Should properly update totalGoods state', () => {
		const { result } = renderHook(useCartProvider);

		act(() => {
			result.current.updateCart(productItem);
		});

		expect(result.current.totalGoods).toBe(1);

		act(() => {
			result.current.updateCart(productItemTwo);
		});

		expect(result.current.totalGoods).toBe(3);

		act(() => {
			result.current.updateCart(productItemThree);
		});

		expect(result.current.totalGoods).toBe(7);

		act(() => {
			result.current.deleteCartItem(productItem.id);
		});

		expect(result.current.totalGoods).toBe(4);
	});

	test('Should properly update totalPrice state', () => {
		const { result } = renderHook(useCartProvider);

		act(() => {
			result.current.updateCart(productItem);
		});

		expect(result.current.totalPrice).toBe(40);

		act(() => {
			result.current.updateCart(productItemTwo);
		});

		expect(result.current.totalPrice).toBe(120);

		act(() => {
			result.current.updateCart(productItemThree);
		});

		expect(result.current.totalPrice).toBe(232);

		act(() => {
			result.current.deleteCartItem(productItem.id);
		});

		expect(result.current.totalPrice).toBe(112);
	});
});
