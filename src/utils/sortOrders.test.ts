import {sortByItemCount} from './sortOrders';
import {sortByDate} from './sortOrders';
import {getSortFunction} from './sortOrders';
import {sortTypes} from './sortOrders';
import {sortOrders} from './sortOrders';
// import {Order} from './sortOrders';


describe('sortByItemCount function', () => {
	test.each([
		[undefined, undefined, 0],
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
	// it('sortByItemCount but with undefined items', () => {
	// 	expect(sortByItemCount(undefined,undefined)).toBe(0);
	// })
});

describe('sortByDate function', () => {
	test.each([
		[undefined, undefined, 0],
		[1, 1, 0],
		[1, 2, 1],
		[2, 1, -1],
	])('.sortByDate(%o, &o)', (first, second, expected) => {
		const firstOrder = {
			date: first,
		};
		const SecondOrder = {
			date: second,
		};
		expect(sortByDate(firstOrder, SecondOrder)).toBe(expected);
	});
	// it('sortByItemCount but with undefined items', () => {
	// 	expect(sortByItemCount(undefined,undefined)).toBe(0);
	// })
});

describe('getSortFunction function', () => {
	test.each([
		[sortTypes.COUNT, sortByItemCount],
		[sortTypes.DATE, sortByDate],
	])('.getSortFunction(%o)', (mode, expectedFunc) => {
		expect(getSortFunction(mode)).toBe(expectedFunc);
	});
});

// describe('sortOrders function', () => {
// 	test.each([
// 		[[[]], sortByItemCount, [[]]],
// 		[undefined, sortByItemCount, undefined],
// 		[[['1']], undefined, [['1']]],
// 		[[['1']], 'not a function', [['1']]],
// 		[[['1', '2'], ['2']], sortByItemCount, [['2'], ['1', '2']]],
// 	])('.sortOrders(%o, %o)', (input, sortFunc, output) => {
// 		let inputOrders: Order[];
// 		input?.forEach(order => inputOrders.push({items: order}));
// 		sortOrders(inputOrders, sortFunc);
// 		let outputOrders: Order[];
// 		output?.forEach(order => outputOrders.push({items: order}));
// 		expect(inputOrders).toEqual(outputOrders);
// 		expect(sortFunc).toHaveBeenCalled();
// 	});
// });

