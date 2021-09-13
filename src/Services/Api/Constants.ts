import { Product } from 'Interfaces/ProductInterface';

const PART_PATH = `${process.env.PUBLIC_URL}/media`;

export const PRODUCT: Product[] = [
	{
		id: '1',
		title: 'Blue Stripe Stoneware Plate',
		brand: 'Kiriko',
		price: 40,
		count: 0,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.',
		image: `${PART_PATH}/blue-stripe-stoneware-plate.jpg`
	},
	{
		id: '2',
		title: 'Hand Painted Blue Flat Dish',
		brand: 'Kiriko',
		price: 28,
		count: 0,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.',
		image: `${PART_PATH}/hand-painted-blue-flat-dish.jpg`
	},
	{
		id: '3',
		title: 'Heme',
		brand: 'Dust & Form',
		price: 52,
		count: 0,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.',
		image: `${PART_PATH}/heme.jpg`
	},
	{
		id: '4',
		title: 'Mashiko-Yaki Green Small Plate',
		brand: 'Kiriko',
		price: 28,
		count: 0,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.',
		image: `${PART_PATH}/mashiko-yaki-green-small-plate.jpg`
	},
	{
		id: '5',
		title: 'Mashiko-Yaki Indigo Small Plate',
		brand: 'Kiriko',
		price: 28,
		count: 0,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.',
		image: `${PART_PATH}/mashiko-yaki-indigo-small-plate.jpg`
	},
	{
		id: '6',
		title: 'Mashiko-Yaki Saucer',
		brand: 'Kiriko',
		price: 18,
		count: 0,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.',
		image: `${PART_PATH}/mashiko-yaki-saucer.jpg`
	}
];
