import {sortByItemCount} from './sortOrders';

describe('sortByItemCount function', () => {
	test.each([
		[[], [], 0],
		[[], ['1'], -1],
		[['1'], [], 1],
		[['1'], ['2'], 0],
		[['1', '2'], ['1'], 1],
		[['1'], ['1', '2'], -1],
	])('.sortByItemCount(%o, &o)', (first, second, expected) => {
		const firstOrder = {
			items: first,
		};
		const SecondOrder = {
			items: second,
		};
		expect(sortByItemCount(firstOrder, SecondOrder)).toBe(expected);
	});
});

