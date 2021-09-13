import { ApiServices } from '../../index';
import { PRODUCT } from '../../Constants';
// Бестолковый тесть но путь будет чем без него
describe('Function should match specification', () => {
	test('Should return array of products', () => {
		expect(ApiServices.getAllProducts()).toStrictEqual(PRODUCT);
	});
});
