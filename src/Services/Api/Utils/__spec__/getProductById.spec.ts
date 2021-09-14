import { ApiServices } from '../../index';

describe('Function should match specification', () => {
	test('Should return properly data', () => {
		expect(ApiServices.getProductById('6')).toStrictEqual({
			id: '6',
			title: 'Mashiko-Yaki Saucer',
			brand: 'Kiriko',
			price: 18,
			count: 1,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.',
			image: `${process.env.PUBLIC_URL}/media/mashiko-yaki-saucer.jpg`
		});
	});

	test('Should return null with invalid id', () => {
		expect(ApiServices.getProductById('9')).toBeNull();
	});
});
