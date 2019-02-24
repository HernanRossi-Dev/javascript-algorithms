'use strict';
const { createTable, printTable } = require('./SubsetSumUtils.js');

class SubsetSumDynPro {
	constructor(value = 100, array = []) {
		this.table = createTable(value, array);
		this.value = value;
		this.array = array;
		this.x = value;
		this.y = array.length;
	}

	findSubset() {
		console.log('the value after offset is: ', this.value, this.array );

		const table = this.table;
		let row = this.y;
		let column = this.x;
		console.log('Initial table: ');
		printTable(table);

		for (let i = 1; i <= this.y; i++){
			for(let j = 0; j <= this.x; j++) {
				if (j - this.array[i-1] >= 0) {
					table[i][j] = table[i-1][j] || this.array[i-1] === j || table[i-1][j - this.array[i-1]];
				} else {
					table[i][j] = table[i-1][j] || this.array[i-1] === j ;
				}
				
			}
		}
		console.log('Result table: ');
		printTable(table);
		return table[row][column];
	} 
}

function main() {
	const array = [4, 6, 10, 1, 3]  ;
	const value = 23;
	const subsetSum = new SubsetSumDynPro(value, array);
	const result = subsetSum.findSubset();
	console.log('THe result of subset sum problem is: ', result);
}

main();