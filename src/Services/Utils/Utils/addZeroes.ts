export function addZeroes(num: number): string {
	const abs = Math.abs(num);
	const dec = String(abs).split('.')[1];
	const len = dec && dec.length > 2 ? dec.length : 2;
	return abs.toFixed(len);
}
