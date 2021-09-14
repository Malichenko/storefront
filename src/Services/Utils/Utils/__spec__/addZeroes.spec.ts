import { UtilServices } from 'Services/Utils';

describe('Function should float numbers like string type', () => {
	test('Case #1', () => {
		expect(UtilServices.addZeroes(12)).toBe('12.00');
	});

	test('Case #2', () => {
		expect(UtilServices.addZeroes(12.9)).toBe('12.90');
	});

	test('Case #3', () => {
		expect(UtilServices.addZeroes(12.99)).toBe('12.99');
	});

	test('Case #4', () => {
		expect(UtilServices.addZeroes(-1)).toBe('1.00');
	});
});
